using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using biblio_react_aspnet.Data;
using biblio_react_aspnet.Model;

namespace biblio_react_aspnet.Controllers;

public class AuthentificationController : Controller
{
    //Controller consists of two Action Methods
    // Action Method for handling GET operation (return View)
    //Action Method for handling XmlHttpRequest AJAX operation
    /*
        AJAX: allow to web pages to be updated asynchronously by exchanging data with web server
        XmlHttpRequest: allow to send Http request and retrieve XML, JSON, HTML,... data
    */

    AppDbContext db = new AppDbContext();
    [Route("api/Authentification/AddAuth")]
    [HttpPost]
    public Response AddAuth(AuthModel authModel)
    {
        //Receiving value from authModel Object and assigning it to Authentification class

        Response response = new Response();
        Authentification authentification = new Authentification();

        authentification.UserName = authModel.UserName;
        authentification.Password = authModel.Password;
        if(authModel.Type == "Add")
        {
            if(authentification != null)
            {
                db.Authentifications.Add(authentification);
                db.SaveChanges();
                response.ResponseCode = "200";
                response.ResponseMessage = "User added";
            }
            else
            {
                response.ResponseCode = "100";
                response.ResponseMessage = "ERROR";
            } 
        }

        return response;
    }

}