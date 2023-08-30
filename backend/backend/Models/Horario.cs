using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Horario
    {
        [Key]
        public int CodigoH { get; set; }
        [Required(ErrorMessage = "El campo Descripcion es obligatorio.")]
        public string Descripcion { get; set; }
    }
}
