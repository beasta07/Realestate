import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";


const initialState = {
    isLoading: false,
    properties: [],
    error: null,
};

export const getProperties = createAsyncThunk("getProperties/Properties", async (data, thunkApi) => {
    try {
        const res = await api.post("properties/search");
        console.log(res.data.data, "response of property");
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const propertySlice = createSlice({
    name: 'property',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getProperties.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProperties.fulfilled, (state,action) => {
            state.isLoading = false;
            state.properties = action.payload;
        });
        builder.addCase(getProperties.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

    }
});


export default propertySlice.reducer;