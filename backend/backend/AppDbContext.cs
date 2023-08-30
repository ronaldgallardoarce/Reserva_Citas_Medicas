using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Reserva>Reservas { get; set; }
        public DbSet<Horario>Horarios { get; set; }
        public DbSet<Medico>Medicos { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Pago> Pagos { get; set; }
    }
}
