import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../fetures/api/apiSlice";
import userReducer from '../fetures/usersApi/userSlice';
import doctorsReducer from '../fetures/doctorsApi/doctorsSlice';
export const store = configureStore({
    reducer: {
        userData: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        doctors: doctorsReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})