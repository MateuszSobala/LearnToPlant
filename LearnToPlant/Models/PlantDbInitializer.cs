using System.Data.Entity;

namespace LearnToPlant.Models
{
    public class PlantDbInitializer : DropCreateDatabaseAlways<PlantDbContext>
    {
        protected override void Seed(PlantDbContext context)
        {
            base.Seed(context);

            context.SaveChanges();
        }
    }
}