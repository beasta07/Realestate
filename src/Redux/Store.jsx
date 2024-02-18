import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/CategorySlice";
import propertySlice from "./features/PropertySlice";
import BlogSlice from "./features/BlogSlice";
import authSlice from "./features/authSlice";
import inquerySlice from "./features/inquerySlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        property: propertySlice,
        blog: BlogSlice,
        register: authSlice,
        inquery: inquerySlice
    },
})

export default store;