using System.ComponentModel.DataAnnotations;

namespace biblio_react_aspnet.Model;

//Setting authentication class (which will be changed into table)
public class Authentification
{
    //Data annotations validation attributes
    [Key]
    public int UserId { get; set; }
    [Required]
    public string? UserName {get; set;}
    [Required]
    [DataType(DataType.Password)]
    public string? Password {get; set;}
}