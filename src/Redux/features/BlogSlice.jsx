import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";

const initialState = {
    isLoading: false,
    blogs: [],
    error: null,
};

export const getBlogs = createAsyncThunk("getBlogs/Blogs", async (data, thunkApi) => {
    try {
        const res = await api.post("blogs/search");
        console.log(res.data.data, "response of Blogs");
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const blogSlice = createSlice({
    name: "blog",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default blogSlice.reducer;