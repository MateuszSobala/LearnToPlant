using LearnToPlant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace LearnToPlant.Controllers
{
    public class WorkController : ApiController
    {
        [HttpGet]
        public JsonResult<Plant> GetPlant(int level)
        {
            if (level == 1)
            {
                return Json(new Plant());
            }
            return Json(new Plant());
        }
    }
}
