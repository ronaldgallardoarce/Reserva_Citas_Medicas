import React, { useState } from 'react';
import './HomePage.css'; // Importa tu archivo de estilos CSS aquí
import Reservar from '../Reserva/reserva';

function HomePage() {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleDiagnoseClick = () => {
    // Simulamos un diagnóstico ficticio por ahora
    setDiagnosis('Es posible que tengas un resfriado común. Te recomendamos descansar y tomar líquidos.');
  };

  return (
    <div className="container">
      <h1>Bienvenido a la Página de Diagnóstico</h1>
      <p>Ingresa tus síntomas a continuación:</p>
      <textarea
        value={symptoms}
        onChange={handleSymptomsChange}
        placeholder="Ingresa tus síntomas aquí..."
        className="symptoms-input"
      />
      <button onClick={handleDiagnoseClick} className="diagnose-button">
        Diagnosticar
      </button>
      {diagnosis && (
        <div className="diagnosis-result">
          <h2>Diagnóstico:</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
    
  );
}

export default HomePage;
