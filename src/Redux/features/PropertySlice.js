// import axios from "axios";
import api from "../../apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  properties: [],
  error: null,
};

export const getProperties = createAsyncThunk(
  "getProperties/Properties",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("properties/search");
      console.log(res.data.data, "response of property");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const propertySlice = createSlice({
  name: "Property",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProperties.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.isLoading = false;
      state.properties = action.payload;
    });
    builder.addCase(getProperties.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default propertySlice.reducer;
