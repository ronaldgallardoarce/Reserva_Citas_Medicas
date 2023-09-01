import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Reservar from "./Components/Reserva/reserva";
import { CargarMedico } from "./redux-toolkit/actions/medicoActions";
import HomePage from "./Components/incio/HomePage";
import ChatbotIntegration from "./Components/ChatbotIntegration/ChatbotIntegration";
import ChatGPT from "./Components/ChatGPT/Chatgpt";
import SeleccionarReserva from "./Components/Reserva/seleccionarReserva";
import { CargarHorario } from "./redux-toolkit/actions/horarioActions";
import { CargarUsuario } from "./redux-toolkit/actions/pacienteActions";
function App() {
  const dispatch = useDispatch();
  const CargarEstados = async () => {
    await dispatch(CargarMedico());
    await dispatch(CargarHorario());
    await dispatch(CargarUsuario());
  };
  useEffect(() => {
    CargarEstados();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/reserva'element={<Reservar></Reservar>}></Route>
        <Route path='/selectReserva' element={<SeleccionarReserva></SeleccionarReserva>}></Route>
        <Route exact path="/" element={<ChatbotIntegration />} />
        <Route path="/chat" element={<ChatGPT />} />
      </Routes>
      <Footer /> {/* Aquí colocas el componente Footer como elemento */}
    </>
  );
}

export default App;
