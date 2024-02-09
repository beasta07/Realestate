import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import PropertySlice from "./PropertySlice";
import blogSlice from "./blogSlice";

const store=configureStore({
    reducer: {
        category: categorySlice,
        property: PropertySlice,
        blog: blogSlice
    },
})
export default store;