import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/CategorySlice";
import propertySlice from "./features/PropertySlice";
import BlogSlice from "./features/BlogSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        property: propertySlice,
        blog: BlogSlice,
    },
})

export default store;