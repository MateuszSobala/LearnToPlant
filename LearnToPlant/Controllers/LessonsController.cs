using LearnToPlant.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Xml.Linq;

namespace LearnToPlant.Controllers
{
    public class LessonsController : ApiController
    {
        private readonly string directoryOfLessons = HttpContext.Current.Server.MapPath("~/Lessons/");

        [HttpGet]
        public HttpResponseMessage LoadLesson(string subject)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "value");
            var lessonsData = XDocument.Load(directoryOfLessons + Path.DirectorySeparatorChar + subject + ".xml");
            var json = JsonConvert.SerializeXNode(lessonsData);
            response.Content = new StringContent(json, Encoding.Unicode);

            return response;
        }
    }
}
