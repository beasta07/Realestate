// import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";


const initialState = {
    isLoading: false,
    user: null,
    error: null, // Ensure error field is initialized

};



export const postRegister = createAsyncThunk("auth/register", async (registerData, thunkApi) => {
    try {
        const res = await api.post("auth/register", registerData);
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
    }
});

export const postLogin = createAsyncThunk("postLogin/login", async ({ loginData, navigate, setMenuOpen, setIsloggedin }, thunkApi) => {
    try {
        const res = await api.post("auth/login", loginData);
        console.log(res.data, "response of login");
        localStorage.setItem('token', res.data.accessToken);
        setMenuOpen(false);
        setIsloggedin(true);
        navigate('/');
        return res.data.accessToken;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem('token');
        },
    },


    // for register
    extraReducers: (builder) => {
        builder.addCase(postRegister.pending, (state) => {
            state.isLoading = true;
            state.error = null; // Reset error state when starting the request
        });
        builder.addCase(postRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(postRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; // Store the error message
        });


        // for login
        builder.addCase(postLogin.pending, (state) => {
            state.isLoading = true;
            state.error = null; // Reset error state when starting the request
        });
        builder.addCase(postLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(postLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; // Store the error message
        });


    },

});

export const { clearError, logoutUser } = authSlice.actions;

export default authSlice.reducer;
