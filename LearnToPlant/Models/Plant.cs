using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnToPlant.Models
{
    public class Plant
    {
        public Plant()
        {
            Pot = new Pot();
            Substrate = new Substrate();
        }

        public int Humidity { get; set; } //wilgotność
        public int Insolation { get; set; } //nasłonecznienie
        public int Temperature { get; set; } //temperatura
        public int Worming { get; set; } //zarobaczenie
        [JsonConverter(typeof(StringEnumConverter))]
        public WormType WormType { get; set; } //typ robaka
        public int Seeds { get; set; } //liczba nasion
        public Pot Pot { get; set; } //doniczka
        public Substrate Substrate { get; set; } //podłoże
        public int Germination { get; set; } //kiełkowanie
        public int Blooming { get; set; } //kwitnienie
        public int Dissemination { get; set; } //rozsiewanie
        public int Fruits { get; set; } //owoce
        public int Disease { get; set; } //choroba
        [JsonConverter(typeof(StringEnumConverter))]
        public DiseaseType DiseaseType { get; set; } //typ choroby
        public int Fertilizer { get; set; } //nawóz
    }
}