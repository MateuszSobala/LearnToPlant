using System.Data.Entity;

namespace LearnToPlant.Models
{
    public class PlantDbContext : DbContext
    {
        public PlantDbContext()
        {
            Database.Initialize(true);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}