import api from "../../apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLoading: false,
    blogs: [],
    error: null,
};

export const getBlogs = createAsyncThunk(
    "getBlogs/Blogs"
    ,async (data, thunkAPI) => {
        try{
            const res = await api.post("blogs/search");
            console.log(res.data.data, "response of blogs");
            return res.data.data;    
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const blogsSlice = createSlice({
    name:"blog",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) =>{
            state.isLoading =true;
        });
        builder.addCase(getBlogs.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getBlogs.rejected, (state, action) =>{
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})

export default blogsSlice.reducer;
