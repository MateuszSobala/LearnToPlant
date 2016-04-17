using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace LearnToPlant.Models
{
    public class ImageModel : List<Image>
    {
        public ImageModel()
        {
            string directoryOfImage = HttpContext.Current.Server.MapPath("~/Images/");
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value));
            AddRange(images.ToList());
        }

        public ImageModel(int level, bool withPrevious)
        {
            string directoryOfImage = HttpContext.Current.Server.MapPath("~/Images/");
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value));
            AddRange(images.Where(i => withPrevious ? i.Level <= level : i.Level == level).ToList());
        }

        public ImageModel(int level, string component)
        {
            string directoryOfImage = HttpContext.Current.Server.MapPath("~/Images/");
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value), image.Element("component").Value);
            AddRange(images.Where(i => i.Level == level && i.Component.Equals(component)).ToList());
        }
    }
}