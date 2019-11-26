using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiHiago.Models;

namespace WebApiHiago.Controllers
{
    public class tbl_testeController : ApiController
    {
        private bdtesteEntities1 db = new bdtesteEntities1();

        // GET: api/tbl_teste
        public IQueryable<tbl_teste> Gettbl_teste()
        {
            return db.tbl_teste;
        }

        // GET: api/tbl_teste/5
        [ResponseType(typeof(tbl_teste))]
        public IHttpActionResult Gettbl_teste(int id)
        {
            tbl_teste tbl_teste = db.tbl_teste.Find(id);
            if (tbl_teste == null)
            {
                return NotFound();
            }

            return Ok(tbl_teste);
        }

        // PUT: api/tbl_teste/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_teste(int id, tbl_teste tbl_teste)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_teste.id)
            {
                return BadRequest();
            }

            db.Entry(tbl_teste).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_testeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/tbl_teste
        [ResponseType(typeof(tbl_teste))]
        public IHttpActionResult Posttbl_teste(tbl_teste tbl_teste)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tbl_teste.Add(tbl_teste);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tbl_teste.id }, tbl_teste);
        }

        // DELETE: api/tbl_teste/5
        [ResponseType(typeof(tbl_teste))]
        public IHttpActionResult Deletetbl_teste(int id)
        {
            tbl_teste tbl_teste = db.tbl_teste.Find(id);
            if (tbl_teste == null)
            {
                return NotFound();
            }

            db.tbl_teste.Remove(tbl_teste);
            db.SaveChanges();

            return Ok(tbl_teste);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_testeExists(int id)
        {
            return db.tbl_teste.Count(e => e.id == id) > 0;
        }
    }
}