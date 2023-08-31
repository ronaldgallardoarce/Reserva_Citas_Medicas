import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CargarMedico= createAsyncThunk("/CargarMedico", async ()=>{
    try {
        const res=await axios.get("/Medicos");
        return res.data;
    } catch (error) {
        return error
    }
})