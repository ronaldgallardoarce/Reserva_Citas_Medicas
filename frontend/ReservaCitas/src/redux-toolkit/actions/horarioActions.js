import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CargarHorario= createAsyncThunk("/CargarHorario", async ()=>{
    try {
        const res=await axios.get("/Horarios");
        return res.data;
    } catch (error) {
        return error
    }
});
export const SelectHorario=createAsyncThunk("/SelectHorario", async(payload)=>{
    try {
        const res = await axios.get(`/Horarios/${payload}`)
        return res.data;
    } catch (error) {
        return error;
    }
})