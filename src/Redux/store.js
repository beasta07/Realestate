import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/CategorySlice";
import propertySlice from "./features/propertySlice";
import BlogSlice from "./features/BlogSlice";
import authSlice from "./features/authSlice";
const store=configureStore({
    reducer:{
        category: categorySlice,
        property: propertySlice,
        blog: BlogSlice,
        register:authSlice,
    }

})
export default store