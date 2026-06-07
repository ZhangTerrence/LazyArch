using System.ComponentModel.DataAnnotations;

namespace Server.Models.Auth;

public class RegisterUserDto
{
    [Required] [MaxLength(12)] public required string Username { get; init; }

    [Required] [EmailAddress] public required string Email { get; init; }

    [Required]
    [DataType(DataType.Password)]
    public required string Password { get; init; }
}