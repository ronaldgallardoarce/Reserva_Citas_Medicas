import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CargarMedico= createAsyncThunk("/CargarMedico", async ()=>{
    try {
        const res=await axios.get("/Medicos");
        return res;
    } catch (error) {
        return error
    }
})