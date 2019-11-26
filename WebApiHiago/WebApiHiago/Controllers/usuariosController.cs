using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiHiago.Models;

namespace WebApiHiago.Controllers
{
    [RoutePrefix("api/usuarios")]
    public class usuariosController : ApiController
    {
        private bdtesteEntities1 db = new bdtesteEntities1();



        [Route("tbl_all")]
        [HttpGet]
        public async Task<IHttpActionResult> tbl_All(int id)
        {


            var comm = db.Database.Connection.CreateCommand();

            comm.CommandText = string.Format(@"SELECT  tbl_teste.id, tbl_teste.cpf, tbl_teste.rg, usuario.nome
                                 FROM tbl_teste 
                                 inner 
                                 JOIN usuario ON tbl_teste.id = usuario.id where usuario.id = {0}",id);

            comm.Connection.Open();

            var Obj = await comm.ExecuteReaderAsync();
            if (Obj == null)
            {
                return NotFound();

            }

            var resultList = new List<tbl_teste>();
            while (await Obj.ReadAsync())
            {
                resultList.Add(new tbl_teste
                {
                    id = Obj.GetInt32(0),
                    cpf = Obj.GetString(1),
                    rg = Obj.GetString(2),
                    nome = Obj.GetString(3)
                    
                });
            }

            return Ok(resultList);
        }



        // GET: api/usuarios
        [Route("Getusuario")]
        [HttpGet]
        public IQueryable<usuario> Getusuario()
        {
            return db.usuario;
        }

        // GET: api/usuarios/5
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Getusuario(int id)
        {
            usuario usuario = db.usuario.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // PUT: api/usuarios/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putusuario(int id, usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.id)
            {
                return BadRequest();
            }

            db.Entry(usuario).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!usuarioExists(id))
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

        // POST: api/usuarios
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Postusuario(usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.usuario.Add(usuario);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = usuario.id }, usuario);
        }

        // DELETE: api/usuarios/5
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Deleteusuario(int id)
        {
            usuario usuario = db.usuario.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            db.usuario.Remove(usuario);
            db.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool usuarioExists(int id)
        {
            return db.usuario.Count(e => e.id == id) > 0;
        }
    }
}