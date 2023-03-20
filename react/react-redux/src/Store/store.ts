import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//Reducers
import userReducer from "./User/user.reducer";

//Assemble all reducers
const rootReducer = combineReducers({
    user: userReducer,
});

//Configure our store
const store = configureStore({
    reducer: rootReducer
});

//Cool types to use
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store