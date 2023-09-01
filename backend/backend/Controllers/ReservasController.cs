using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend;
using backend.Models;
using Microsoft.AspNetCore.Cors;
using Stripe;
using Stripe.Checkout;

namespace backend.Controllers
{
    [EnableCors("cors")]
    [Route("api/[controller]")]
    [ApiController]
    public class ReservasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReservasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Reservas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reserva>>> GetReservas()
        {
          if (_context.Reservas == null)
          {
              return NotFound();
          }
            return await _context.Reservas.ToListAsync();
        }

        // GET: api/Reservas/5

        [HttpPost]
        [Route("create-checkout-session")]
        public IActionResult Create()
        {
            var user = _context.Pacientes.Where(user => user.CodigoP ==1 ).FirstOrDefault();
            var options = new SessionCreateOptions
            {
                SubmitType = "book",
                PaymentMethodTypes = new List<string>
                {
                    "card",
                },
                LineItems = new List<SessionLineItemOptions>
                {
                    new SessionLineItemOptions
                    {
                       PriceData = new SessionLineItemPriceDataOptions
                       {
                          UnitAmount = (long?)100*100,
                          Currency = "bob",
                          ProductData = new SessionLineItemPriceDataProductDataOptions
                          {
                              Name = "Reserva de cita medica",
                            //   Images = new List<string>
                            //   {
                            //     //   HttpUtility.UrlPathEncode("https://www.thefourtienda.com.bo/wp-content/uploads/2021/03/Polera-ploma.png")
                            //   }
                          },
                       },
                       Quantity = 1,
                    },
                },
                ClientReferenceId = user?.CodigoP.ToString(),
                Mode = "payment",
                SuccessUrl = "https://localhost:5173/Success",
                CancelUrl = "https://localhost:5173/",
            };

            var service = new SessionService();
            Session session = service.Create(options);

            Response.Headers.Add("Location", session.Url);
            return new StatusCodeResult(302);
        }

        // PUT: api/Reservas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReserva(int id, Reserva reserva)
        {
            if (id != reserva.CodigoR)
            {
                return BadRequest();
            }

            _context.Entry(reserva).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reservas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Paciente>> PostReserva(int id)
        //{
        ////   if (_context.Reservas == null)
        ////   {
        ////       return Problem("Entity set 'AppDbContext.Reservas'  is null.");
        ////   }
        //    //_context.Reservas.Add(reserva);
        //    //await _context.SaveChangesAsync();
        //    var user = _context.Pacientes.Where(user => user.CodigoP == id).FirstOrDefault();
        //    var options = new SessionCreateOptions
        //    {
        //        SubmitType = "book",
        //        PaymentMethodTypes = new List<string>
        //        {
        //            "card",
        //        },
        //        LineItems = new List<SessionLineItemOptions>
        //        {
        //            new SessionLineItemOptions
        //            {
        //               PriceData = new SessionLineItemPriceDataOptions
        //               {
        //                  UnitAmount = (long?)100*100,
        //                  Currency = "bob",
        //                  ProductData = new SessionLineItemPriceDataProductDataOptions
        //                  {
        //                      Name = "Reserva de cita medica",
        //                    //   Images = new List<string>
        //                    //   {
        //                    //     //   HttpUtility.UrlPathEncode("https://www.thefourtienda.com.bo/wp-content/uploads/2021/03/Polera-ploma.png")
        //                    //   }
        //                  },
        //               },
        //               Quantity = 1,
        //            },
        //        },
        //        ClientReferenceId = user.CodigoP.ToString(),
        //        Mode = "payment",
        //        SuccessUrl = "https://localhost:7065/Success/PaySuccess?session_id={CHECKOUT_SESSION_ID}",
        //        CancelUrl = "https://localhost:7065/Habitacion/ViewHabitations",
        //    };
        //    // foreach (var item in ReservasClient)
        //    // {
        //    //     var itemsReserva = new SessionLineItemOptions
        //    //     {
        //    //         PriceData = new SessionLineItemPriceDataOptions
        //    //         {
        //    //             UnitAmount = (long?)item.Subtotal * 100,
        //    //             Currency = "bob",
        //    //             ProductData = new SessionLineItemPriceDataProductDataOptions
        //    //             {
        //    //                 Name = item.Habitacion.Codigo,
        //    //                 Description = item.Habitacion.tipo.Nombre,
        //    //                 Images = new List<string>
        //    //                 {
        //    //                     HttpUtility.UrlPathEncode("~/imagenes/"+item.Habitacion.Imagen)
        //    //                 }
        //    //             },
        //    //         },
        //    //         Quantity = 1,
        //    //     };
        //    //     options.LineItems.Add(itemsReserva);

        //    // }

        //    var service = new SessionService();
        //    Session session = service.Create(options);

        //    Response.Headers.Add("Location", session.Url);

        //    // return CreatedAtAction("GetReserva", new { id = reserva.CodigoR }, reserva);
        //    return user;
        //}

        // DELETE: api/Reservas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReserva(int id)
        {
            if (_context.Reservas == null)
            {
                return NotFound();
            }
            var reserva = await _context.Reservas.FindAsync(id);
            if (reserva == null)
            {
                return NotFound();
            }

            _context.Reservas.Remove(reserva);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservaExists(int id)
        {
            return (_context.Reservas?.Any(e => e.CodigoR == id)).GetValueOrDefault();
        }
    }
}
