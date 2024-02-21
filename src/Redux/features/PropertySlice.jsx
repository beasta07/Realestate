import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiConfig";

const initialState = {
    isLoading: false,
    properties: [],
    bookedProperties: [],
    error: null,
    filterLocation: null, // New state to store the filter location
};

export const getProperties = createAsyncThunk("getProperties/Properties", async (data, thunkApi) => {
    try {
        const res = await api.post("properties/search", data);
        console.log(res.data.data, "response of property");
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const filterProperties = createAsyncThunk("filterProperties/Properties", async (data, thunkAPI) => {
    console.log(data, "dataaaa")
    try {
        const res = await api.post("properties/search", data);
        console.log(res.data.data, "response of property");
        return res.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);

export const postBookedProperties = createAsyncThunk("postBookedProperties/Properties", async ({ propertyId, userId }, thunkApi) => {
    try {
        const res = await api.post("purchase/create", { property: propertyId, user: userId });
        localStorage.setItem('username', res.data.user._id);
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const getBookedProperties = createAsyncThunk("getBookedProperties/Properties", async (data, thunkApi) => {
    try {
        const res = await api.post("purchase/search", data);
        console.log(res.data.data, "response of booked properties");
        // localStorage.setItem('username', res.data.user._id);
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        setBookedProperties: (state, action) => {
            state.bookedProperties = action.payload;
        },
        setFilterLocation: (state, action) => {
            state.filterLocation = action.payload;
        },
    },



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

        // TODO: filter properties
        builder.addCase(filterProperties.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(filterProperties.fulfilled, (state, action) => {
            state.isLoading = false;
            state.properties = action.payload;
        });
        builder.addCase(filterProperties.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });


        // TODO: booked properties
        builder.addCase(getBookedProperties.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBookedProperties.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookedProperties = action.payload;
        });
        builder.addCase(getBookedProperties.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { setFilterLocation, setBookedProperties } = propertySlice.actions;

export default propertySlice.reducer;
