using System.ComponentModel.DataAnnotations;

namespace biblio_react_aspnet.Model;

public class AuthModel
{
    [Key]
    public int UserId { get; set; }
    [Required]
    public string? UserName {get; set;}
    [Required]
    [DataType(DataType.Password)]
    public string? Password {get; set;}
    public string? Type {get; set;}
}