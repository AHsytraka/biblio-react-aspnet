using Microsoft.EntityFrameworkCore;

namespace biblio_react_aspnet;

public class AppDbContext: DbContext 
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder) 
    {
        optionBuilder.UseMySQL("Server=localhost;Port=3306;Database=SetThisName;Uid=root;Pwd=azerty1234;");
    }
}