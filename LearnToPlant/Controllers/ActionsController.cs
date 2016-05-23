using LearnToPlant.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;
using System.Web.Http.Results;

namespace LearnToPlant.Controllers
{
    public class ActionsController : ApiController
    {
        [HttpPost]
        public JsonResult<Plant> HandleAction(JObject data, string action, int value)
        {
            var plant = JsonConvert.DeserializeObject<Plant>(data["Plant"].ToString());
            var actionType = (Actions)Enum.Parse(typeof(Actions), action);
            HandleAction(ref plant, actionType, value);
            return Json(plant);
        }

        private static void HandleAction(ref Plant plant, Actions action, int value)
        {
            if (action.Equals(Actions.watering))
            {
                plant.Substrate.Humidity += value;
            }
            else if (action.Equals(Actions.healing))
            {
                if((int)plant.DiseaseType == value)
                {
                    plant.Disease--;
                }
                else
                {
                    plant.Disease++;
                }
            }
            else if (action.Equals(Actions.deworming))
            {
                if ((int)plant.WormType == value)
                {
                    plant.Worming--;
                }
                else
                {
                    plant.Worming++;
                }
            }
        }
    }
}
