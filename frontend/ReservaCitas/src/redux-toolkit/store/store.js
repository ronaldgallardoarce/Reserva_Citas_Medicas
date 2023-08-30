import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import medicoSlices from "../slices/medicoSlices";
import testSlices from "../slices/testSlices";

const store = configureStore({
    reducer:{
        test:testSlices,
        Medicos:medicoSlices
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
});

export default store;