import { createSlice } from "@reduxjs/toolkit";
import { SelectHorario, CargarHorario } from "../actions/horarioActions";

const initialState ={
    horarios:[],
    horario:{}
};

const horariosSlice = createSlice({
    name:"Horarios",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(CargarHorario.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(CargarHorario.fulfilled, (state, action) => { //action.payload
            state.horarios=action.payload
            state.status = "success";
        });
        builder.addCase(CargarHorario.rejected, (state, action) => {
            state.status = "rejected";
        });

        builder.addCase(SelectHorario.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(SelectHorario.fulfilled, (state, action) => { //action.payload
            state.horario=action.payload
            state.status = "success";
        });
        builder.addCase(SelectHorario.rejected, (state, action) => {
            state.status = "rejected";
        });
    }
});

export default horariosSlice.reducer;