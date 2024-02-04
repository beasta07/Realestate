import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};
export const getCategories = createAsyncThunk("getCategories/Categories", async (data, thunkAPI) => {
    try {
      const res = await axios.post("https://api.myraj.au/api/categories/search");
      console.log(res.data.data, "response of category")
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
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      console.log(action.payload, "action .payload")
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  },
});



export default categorySlice.reducer 