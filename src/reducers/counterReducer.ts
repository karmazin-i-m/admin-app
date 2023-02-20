import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

const initialState: CounterState =
{
    counter:
    {
        count: 0
    }
};

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState,
        reducers:
        {
            increment: (state) => {
                state.counter.count += 1;
            },
            decrement: (state) => {
                state.counter.count -= 1;
            }
        }
    }
);

export const {increment, decrement} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;