// import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

export const GetCategories = createAsyncThunk("getCategories/Categories", async (data, thunkAPI) => {
    try {
      const res = await api.post("categories/search");
      console.log(res.data.data, "response of category");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(GetCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetCategories.fulfilled, (state, action) => {
      console.log(action.payload, "action .payload");
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(GetCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
