import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";


const initialState ={
    isLoading: false,
    // Login: [],
    user: null,
    error: null,
};

export const postLogin = createAsyncThunk("postLogin/login", async ({ loginData, navigate, setMenuOpen, setIsloggedin, setUsername}, thunkApi) => {
    try {
        const res = await api.post("auth/login", loginData);
        console.log(res.data, "response of login");
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('username', res.data.user.username);
        setMenuOpen(false);
        setIsloggedin(true);
        setUsername(res.data.user.username);
        navigate('/');
        return res.data.accessToken;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
    }
});
export const postRegister = createAsyncThunk(
    "postRegister/register",
    async (registerData, thunkAPI) => {
        try{
            const res = await api.post("auth/register", registerData);
            console.log(res.data.data, "response of register");
            return res.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);

        }
    }
);

// const authSlice = createSlice({
//     name:"login",
//     initialState,

//     extraReducers: (builder) => {
//         builder.addCase(postLogin.pending, (state) => {
//             state.isLoading =true;
//         });
//         builder.addCase(postLogin.fulfilled, (state,action) =>{
//             state.isLoading = false;
//             state.Login = action.payload;
//         });
//         builder.addCase(postLogin.rejected, (state, action) => {
//             state.isLoading = false;
//             state.error = action.payload;
//         })
//     }
// })
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        clearError: (state) => {
            state.error =null;
        },
        logoutUser: (state) =>{
            state.user = null;
            localStorage.removeItem('token');
        }
    },

    extraReducers: (builder) => {
        builder.addCase(postRegister.pending, (state) => {
            state.isLoading =true;
            state.error = null;
        });
        builder.addCase(postRegister.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(postRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
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
    }
});

export const {clearError, logoutUser} = authSlice.actions;

export default authSlice.reducer;
