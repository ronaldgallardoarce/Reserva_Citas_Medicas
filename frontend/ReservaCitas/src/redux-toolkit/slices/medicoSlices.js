import { createSlice } from "@reduxjs/toolkit";
import { CargarMedico } from "../actions/medicoActions";

const initialState ={
    medicos:[]
};

const medicosSlice = createSlice({
    name:"Medicos",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(CargarMedico.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(CargarMedico.fulfilled, (state, action) => { //action.payload
            state.auth=true;
            state.user=action.payload
            state.status = "success";
        });
        builder.addCase(CargarMedico.rejected, (state, action) => {
            state.status = "rejected";
        });
    }
});

export default medicosSlice.reducer;