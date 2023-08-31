import { createSlice } from "@reduxjs/toolkit";
import { CargarMedico, SelectMedico } from "../actions/medicoActions";

const initialState ={
    medicos:[],
    medico:{}
};

const medicosSlice = createSlice({
    name:"Medicos",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(CargarMedico.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(CargarMedico.fulfilled, (state, action) => { //action.payload
            state.medicos=action.payload
            state.status = "success";
        });
        builder.addCase(CargarMedico.rejected, (state, action) => {
            state.status = "rejected";
        });

        builder.addCase(SelectMedico.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(SelectMedico.fulfilled, (state, action) => { //action.payload
            state.medico=action.payload
            state.status = "success";
        });
        builder.addCase(SelectMedico.rejected, (state, action) => {
            state.status = "rejected";
        });
    }
});

export default medicosSlice.reducer;