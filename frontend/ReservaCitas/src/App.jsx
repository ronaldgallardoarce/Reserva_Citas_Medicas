import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar/navbar'
import Reservar from './Components/Reserva/reserva'
import { CargarMedico } from './redux-toolkit/actions/medicoActions'

function App() {
  const dispatch=useDispatch();
  const x= async()=>{
    dispatch(CargarMedico());
  }
  useEffect(()=>{
  })
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Reservar></Reservar>}></Route>
        <Route path='/reserva'element={<Reservar></Reservar>}></Route>
      </Routes>
    </>
  )
}

export default App
