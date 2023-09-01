import { createSlice } from "@reduxjs/toolkit";
import { CargarUsuario } from "../actions/pacienteActions";

const initialState={
    paciente:{}
}
const pacienteSlices=createSlice({
    name:"Paciente",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(CargarUsuario.pending, (state, action)=>{
            state.status = "pending";
        });
        builder.addCase(CargarUsuario.fulfilled, (state, action) => { //action.payload
            state.paciente=action.payload
            state.status = "success";
        });
        builder.addCase(CargarUsuario.rejected, (state, action) => {
            state.status = "rejected";
        });
    }
});
export default pacienteSlices.reducer;