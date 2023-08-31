import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar/navbar'
import Reservar from './Components/Reserva/reserva'
import SeleccionarReserva from './Components/Reserva/seleccionarReserva'
import { CargarMedico } from './redux-toolkit/actions/medicoActions'

function App() {
  const dispatch=useDispatch();
  const x= async()=>{
    console.log('app')
    await dispatch(CargarMedico());
  }
  useEffect(()=>{
    x();
  })
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Reservar></Reservar>}></Route>
        <Route path='/reserva'element={<Reservar></Reservar>}></Route>
        <Route path='/selectReserva' element={<SeleccionarReserva></SeleccionarReserva>}></Route>
      </Routes>
    </>
  )
}

export default App
