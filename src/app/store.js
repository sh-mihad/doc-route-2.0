import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../fetures/api/apiSlice";
import userReducer from '../fetures/usersApi/userSlice'
export const store = configureStore({
    reducer:{
        userData:userReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
})