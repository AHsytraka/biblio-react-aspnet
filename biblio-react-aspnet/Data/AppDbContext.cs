using Microsoft.EntityFrameworkCore;

namespace biblio_react_aspnet;

public class AppDbContext: DbContext 
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder) 
    {
        optionBuilder.UseMySQL("Server=localhost;Port=3306;Database=OurDB;Uid=root;Pwd=azerty1234;");
    }

    //Creating authentication table
    public DbSet<Authentification> Authentifications {get; set;} = null!;
}