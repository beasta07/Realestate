import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";

const initialState = {
    isLoading: false,
    bookedproperty: [],
    error: null,
};

export const getBookedProperty = createAsyncThunk("getBookedProperty/BookedProperty", async (data, thunkApi) => {
    try {
        const res = await api.post("/purchase/create", data);
        console.log(res.data.data, "response of Booked Property");
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const bookedPropertySlice = createSlice({
    name: "bookedproperty",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getBookedProperty.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBookedProperty.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookedproperty = action.payload;
        });
        builder.addCase(getBookedProperty.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default bookedPropertySlice.reducer;