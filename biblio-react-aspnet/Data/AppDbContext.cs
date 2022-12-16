using Microsoft.EntityFrameworkCore;
using biblio_react_aspnet.Model;

namespace biblio_react_aspnet.Data;

public class AppDbContext: DbContext 
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder) 
    {
        optionBuilder.UseMySQL("Server=localhost;Port=3306;Database=OurDB;Uid=root;Pwd=azerty1234;");
    }

    //Creating authentication table
    public DbSet<Authentification> Authentifications {get; set;} = null!;
}