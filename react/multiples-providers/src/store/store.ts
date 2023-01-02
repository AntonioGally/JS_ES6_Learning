import { configureStore } from '@reduxjs/toolkit'
import responseReducer from './reducer'
// ...

const store = configureStore({
    reducer: {
        response: responseReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;