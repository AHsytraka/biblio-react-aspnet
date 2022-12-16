using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace biblio_react_aspnet;

//Setting authentication class (which will be changed into table)
public class Authentification
{
    //Data annotations
    //Data annotaions validation attributes: The validation attributes are firstly checked
    

    [Key]
    public int UserId { get; set; }

    [Required]
    public string? UserName {get; set;}

    [Required]
    [DataType(DataType.Password)]
    public string? Password {get; set;}
}