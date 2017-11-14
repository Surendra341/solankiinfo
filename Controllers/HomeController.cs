using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using solankiinfo.Models;

namespace solankiinfo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        [HttpPost]
        public ActionResult SaveEnquiries(SIEnqury SIEnqury)
        {
            if (SIEnqury != null)
            {
                docsonlineindiaEntities db = new docsonlineindiaEntities();
                db.SIEnquries.Add(SIEnqury);
                db.SaveChanges();
                return Json("success");
            }
            return Json("Error");
        }
    }
}
