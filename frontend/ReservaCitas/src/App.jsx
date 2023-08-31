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
function App() {
  const dispatch = useDispatch();
  const x = async () => {
    console.log("app");
    await dispatch(CargarMedico());
  };
  useEffect(() => {
    x();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ChatbotIntegration />} />
        <Route path="/chat" element={<ChatGPT />} />

        <Route
          exact
          path="/"
          element={<SeleccionarReserva></SeleccionarReserva>}
        ></Route>
        <Route path="/reserva" element={<Reservar></Reservar>}></Route>
      </Routes>
      <Footer /> {/* Aquí colocas el componente Footer como elemento */}
    </>
  );
}

export default App;
