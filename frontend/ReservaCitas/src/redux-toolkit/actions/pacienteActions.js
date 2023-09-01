import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CargarUsuario=createAsyncThunk("/CargarUsuario", async()=>{
    try {
        const res = await axios.get(`/Pacientes/${1}`)
        return res.data;
    } catch (error) {
        return error;
    }
})