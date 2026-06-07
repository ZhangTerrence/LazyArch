using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Server.Data.Entities;
using Server.Models.Auth;

namespace Server.Controllers;

[Route("Api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly SignInManager<User> _signInManager;
    private readonly UserManager<User> _userManager;

    public AuthController(ILogger<AuthController> logger, SignInManager<User> signInManager,
        UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
    {
        _logger = logger;
        _signInManager = signInManager;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    [HttpPost("Register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register(RegisterUserDto request)
    {
        var existingUser = await _userManager.FindByEmailAsync(request.Email);
        if (existingUser is not null) return BadRequest("User already exists.");

        var user = new User
        {
            UserName = request.Username,
            Email = request.Email
        };
        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded) return IdentityError(result);

        var roleExists = await _roleManager.RoleExistsAsync("User");
        if (!roleExists)
        {
            var userRole = new IdentityRole("User");
            result = await _roleManager.CreateAsync(userRole);
            if (!result.Succeeded) return IdentityError(result);
        }

        result = await _userManager.AddToRoleAsync(user, "User");
        if (!result.Succeeded) return IdentityError(result);

        return Created();
    }

    [HttpPost("Login/Credentials")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(UserLoginDto request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user is null) return BadRequest("User does not exist.");

        var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
        if (!result.Succeeded) return StatusCode(401);

        await _signInManager.SignInAsync(user, true);

        return Ok();
    }

    [HttpGet("CheckAuth")]
    [Authorize]
    public IActionResult CheckAuth()
    {
        return Ok();
    }

    private StatusCodeResult IdentityError(IdentityResult result, int statusCode = 500)
    {
        foreach (var error in result.Errors)
        {
            _logger.LogError("{Description}", error.Description);
            ModelState.AddModelError(error.Code, error.Description);
        }

        return StatusCode(statusCode);
    }
}