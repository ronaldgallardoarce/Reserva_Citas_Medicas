using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Pago
    {
        [Key]
        public int CodigoP { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime Fecha { get; set; }
        [Required]
        public decimal Monto { get; set; }
        [Required]
        public int CodigoR { get; set; }
        [ForeignKey("CodigoR")]
        public Reserva Reserva { get; set; }
    }
}
