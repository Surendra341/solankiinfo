using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using solankiinfo.Models;

namespace solankiinfo.Controllers
{
    public class EnquiryController : Controller
    {
        private docsonlineindiaEntities db = new docsonlineindiaEntities();

        // GET: Enqury
        public async Task<ActionResult> Index()
        {
            return View(await db.SIEnquries.ToListAsync());
        }

        // GET: Enqury/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SIEnqury sIEnqury = await db.SIEnquries.FindAsync(id);
            if (sIEnqury == null)
            {
                return HttpNotFound();
            }
            return View(sIEnqury);
        }

        // GET: Enqury/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Enqury/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Name,MobileNo,Email,Message")] SIEnqury sIEnqury)
        {
            if (ModelState.IsValid)
            {
                db.SIEnquries.Add(sIEnqury);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(sIEnqury);
        }

        // GET: Enqury/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SIEnqury sIEnqury = await db.SIEnquries.FindAsync(id);
            if (sIEnqury == null)
            {
                return HttpNotFound();
            }
            return View(sIEnqury);
        }

        // POST: Enqury/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,MobileNo,Email,Message")] SIEnqury sIEnqury)
        {
            if (ModelState.IsValid)
            {
                db.Entry(sIEnqury).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(sIEnqury);
        }

        // GET: Enqury/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SIEnqury sIEnqury = await db.SIEnquries.FindAsync(id);
            if (sIEnqury == null)
            {
                return HttpNotFound();
            }
            return View(sIEnqury);
        }

        // POST: Enqury/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            SIEnqury sIEnqury = await db.SIEnquries.FindAsync(id);
            db.SIEnquries.Remove(sIEnqury);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
