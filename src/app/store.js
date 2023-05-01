import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../fetures/api/apiSlice"

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
})