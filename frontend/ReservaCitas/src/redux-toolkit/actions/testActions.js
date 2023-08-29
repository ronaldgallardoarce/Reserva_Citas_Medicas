import {createAsyncThunk} from "@reduxjs/toolkit";

export const test = createAsyncThunk("/test", async(payload)=>{
    try {
        return payload;
    } catch (error) {
        return error;
    }
})