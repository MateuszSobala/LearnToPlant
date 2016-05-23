using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace LearnToPlant.Models
{
    public class ImageModel : List<Image>
    {
        public readonly string directoryOfImage = HttpContext.Current.Server.MapPath("~/Images/");

        public ImageModel()
        {
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value));
            AddRange(images.ToList());
        }

        public ImageModel(int level, bool withPrevious)
        {
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value));
            AddRange(images.Where(i => withPrevious ? i.Level <= level : i.Level == level).ToList());
        }

        public ImageModel(int level, string component)
        {
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value), image.Element("component").Value,
                         image.Element("action").Value, int.Parse(image.Element("value").Value));
            AddRange(images.Where(i => i.Level == level && i.Component.Equals(component)).ToList());
        }

        public ImageModel(int level)
        {
            XDocument imageData = XDocument.Load(directoryOfImage + @"/ImageMetaData.xml");
            var images = from image in imageData.Descendants("image")
                         select new Image(image.Element("filename").Value, image.Element("description").Value, int.Parse(image.Element("level").Value), image.Element("component").Value,
                         (from subImage in image.Descendants("subImage")
                         select new Image(subImage.Element("filename").Value, subImage.Element("description").Value, int.Parse(subImage.Element("level").Value), subImage.Element("component").Value)).ToList());
            AddRange(images.Where(i => i.Level == level && i.Component.Equals("tools")).ToList());
        }
    }
}