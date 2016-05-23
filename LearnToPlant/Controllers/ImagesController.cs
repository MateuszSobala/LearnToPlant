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
    public class ImagesController : ApiController
    {
        [HttpGet]
        public JsonResult<List<Image>> GetImages()
        {
            return Json(new ImageModel().ToList());
        }

        [HttpGet]
        public JsonResult<List<Image>> GetImages(int level, string component)
        {
            if (component == "tools")
                return Json(new ImageModel(level).ToList());

            return Json(new ImageModel(level, component).ToList());
        }

        [HttpGet]
        public JsonResult<List<Image>> GetImages(int level, bool withPrevious)
        {
            return Json(new ImageModel(level, withPrevious).ToList());
        }
    }
}
