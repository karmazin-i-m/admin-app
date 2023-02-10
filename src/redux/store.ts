import { configureStore, EnhancedStore, StoreEnhancer } from "@reduxjs/toolkit";
import { ThunkMiddlewareFor } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import thunk from "redux-thunk";
import { counterReducer } from '../reducers/counterReducer'

export const store: EnhancedStore<CounterState, CounterAction> = configureStore(
    {
        reducer: counterReducer
    });