using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace biblio_react_aspnet;

//Setting authentication class (which will be changed into table)
public class Authentification
{
    //Data annotations
    [Key]
    public int UserId { get; set; }
    [Required]
    public string? UserName {get; set;}
    [Required]
    public string? Password {get; set;}
}