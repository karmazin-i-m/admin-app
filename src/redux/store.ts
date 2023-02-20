import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { counterReducer } from '../reducers/counterReducer'

export const store: EnhancedStore<CounterState, CounterAction> = configureStore(
    {
        reducer: counterReducer
    });