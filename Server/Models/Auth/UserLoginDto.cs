using System.ComponentModel.DataAnnotations;

namespace Server.Models.Auth;

public class UserLoginDto
{
    [Required] [EmailAddress] public required string Email { get; init; }

    [Required]
    [DataType(DataType.Password)]
    public required string Password { get; init; }
}