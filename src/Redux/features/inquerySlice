import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";


const initialState = {
    isLoading: false,
    inqueries: null,
    error: null,
};

export const postInquery = createAsyncThunk("postInquery/inquery", async (data, thunkApi) => {
    try {
        const res = await api.post("contacts/create", data);
        return res.data.data;
    } catch (error) {
     return thunkApi.rejectWithValue(error);    
    }
});

const inquerySlice = createSlice ({
    name: "inquery",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(postInquery.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postInquery.fulfilled, (state, action) => {
            state.isLoading = false;
            state.inquery = action.payload;
        });
        builder.addCase(postInquery.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default inquerySlice.reducer;