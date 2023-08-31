import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/footer/footer';
import Reservar from './Components/Reserva/reserva';
import { CargarMedico } from './redux-toolkit/actions/medicoActions';
import HomePage from './Components/incio/HomePage';
import ChatbotIntegration from './Components/ChatbotIntegration/ChatbotIntegration';
import ChatGPT from './Components/ChatGPT/Chatgpt';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Aquí podrías realizar alguna acción en la carga inicial del componente
    // dispatch(CargarMedico());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ChatbotIntegration />} />
        <Route path="/chat" element={<ChatGPT />} />

      </Routes>
      <Footer /> {/* Aquí colocas el componente Footer como elemento */}
    </>
  );
}

export default App;
