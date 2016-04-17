using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnToPlant.Models
{
    public class Substrate //podłoże
    {
        public int Stones { get; set; } //kamienie
        public int Soil { get; set; } //gleba
        public int Humidity { get; set; } //wilgotność
        [JsonConverter(typeof(StringEnumConverter))]
        public SoilType SoilType { get; set; } //typ gleby
    }
}