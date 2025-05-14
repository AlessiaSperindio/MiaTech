import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./slices/textslices";

export default configureStore({
    reducer:{
        data : textReducer
    }
});