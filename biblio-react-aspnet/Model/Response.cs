namespace biblio_react_aspnet.Model;

public class Response 
{
    public string? ResponseCode {get; set;}
    public string? ResponseMessage {get; set;}
    public Authentification? authentification {get; set;}
    public List<Authentification>? listAuthentification {get; set;}
}