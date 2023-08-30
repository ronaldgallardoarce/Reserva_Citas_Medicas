using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Paciente
    {
        [Key] 
        public int CodigoP { get; set; }
        [Required(ErrorMessage = "El campo Ci es obligatorio.")]
        [StringLength(10, ErrorMessage = "El campo Ci debe tener como máximo 10 caracteres.")]
        public string Ci { get; set; }
        [Required(ErrorMessage = "El campo Nombre es obligatorio.")]
        [StringLength(50, ErrorMessage = "El campo Nombre debe tener como máximo 50 caracteres.")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El campo Apellido es obligatorio.")]
        [StringLength(50, ErrorMessage = "El campo Apellido debe tener como máximo 50 caracteres.")]
        public string Apellido { get; set; }
        [Required(ErrorMessage = "El campo Teléfono es obligatorio.")]
        [StringLength(20, ErrorMessage = "El campo Teléfono debe tener como máximo 20 caracteres.")]
        [Phone(ErrorMessage = "El campo Teléfono debe ser un número de teléfono válido.")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "El campo Correo es obligatorio.")]
        [EmailAddress(ErrorMessage = "El campo Correo debe ser una dirección de correo electrónico válida.")]
        public string Correo { get; set; }
        [Required(ErrorMessage = "El campo Fecha de nacimiento es obligatorio.")]
        [DataType(DataType.Date)]
        public DateTime FechaNac { get; set; }

    }
}
