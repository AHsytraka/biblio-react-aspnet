using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace biblio_react_aspnet;

//Setting authentication class (which will be changed into table)
public class Authentification
{
    [Key]
    public int UserId { get; set; }
    public string? UserName {get; set;}
    public string? Password {get; set;}
}