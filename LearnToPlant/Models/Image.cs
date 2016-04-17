using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnToPlant.Models
{
    public class Image
    {
        public const string DirectoryOfImage = "/Images/";

        public Image(string filename, string desc, int level)
        {
            Path = DirectoryOfImage + filename;
            Description = desc;
            Level = level;
        }

        public Image(string filename, string desc, int level, string component)
        {
            Path = DirectoryOfImage + filename;
            Description = desc;
            Level = level;
            Component = component;
        }

        public Image(string filename, string desc, int level, string component, string action, int value)
        {
            Path = DirectoryOfImage + filename;
            Description = desc;
            Level = level;
            Component = component;
            Action = action;
            Value = value;
        }

        public string Path { get; set; }
        public string Description { get; set; }
        public int Level { get; set; }
        public string Component { get; set; }
        public string Action { get; set; }
        public int Value { get; set; }
    }
}