import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/CategorySlice";
import propertySlice from "./features/propertySlice";

const store=configureStore({
    reducer:{
        category: categorySlice,
        property: propertySlice,
    }

})
export default store