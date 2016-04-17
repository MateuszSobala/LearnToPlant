using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnToPlant.Models
{
    public class Pot // doniczka
    {
        public int Height { get; set; }
        public int Width { get; set; }
        public bool Holes { get; set; } // czy doniczka ma otwory odpływowe
        public bool Stand { get; set; } // czy doniczka ma podstawkę
        public int Weeds { get; set; } // chwasty
        [JsonConverter(typeof(StringEnumConverter))]
        public WeedType WeedType { get; set; } // typ chwastów
    }
}