import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import PropertySlice from "./PropertySlice";
import blogSlice from "./blogSlice";
import authSlice from "./authSlice";
import inquerySlice from "./inquerySlice";

const store=configureStore({
    reducer: {
        category: categorySlice,
        property: PropertySlice,
        blog: blogSlice,
        register: authSlice,
        inquery: inquerySlice
    },
})
export default store;