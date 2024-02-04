import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/CategorySlice";

const store = configureStore({
    reducer: {
        category: categorySlice
    },
})

export default store;