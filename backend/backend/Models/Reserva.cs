using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Reserva
    {
        [Key]
        public int CodigoR { get; set; }
        [Required]
        public int CodigoP { get; set; }
        [Required]
        public int CodigoM { get; set; }
        [Required]
        public int CodigoH { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime Fecha { get; set; }
        [ForeignKey("CodigoP")]
        public Paciente Paciente  { get; set; }
        [ForeignKey("CodigoM")]
        public Medico Medico { get; set; }
        [ForeignKey("CodigoH")]
        public Horario Horario { get; set; }

    }
}
