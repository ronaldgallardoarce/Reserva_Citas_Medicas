import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import horarioSlices from "../slices/horarioSlices";
import medicoSlices from "../slices/medicoSlices";
import pacienteSlices from "../slices/pacienteSlices";
import testSlices from "../slices/testSlices";

const store = configureStore({
    reducer:{
        test:testSlices,
        Medicos:medicoSlices,
        Horarios:horarioSlices,
        Paciente:pacienteSlices
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
});

export default store;