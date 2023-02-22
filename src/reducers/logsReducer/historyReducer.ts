import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { logs } from "./initialState";
import { OrderHistory, History } from "./Types/HistoryTypes";

const fetchOrderHistoriesAsync = <T>(url: string): Promise<T> => 
{
    debugger;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}
    

export const fetchHistoryAsync = createAsyncThunk(
    'history/fetchHistory',
    async () => 
    {
        debugger;
        return await fetchOrderHistoriesAsync<Array<OrderHistory>>("https://localhost:18101/api/OrderHistory/GetOrderHistories")
    } 
);

const initialState: History = 
{
    Histories : logs
};

export const historySlice = createSlice(
    {
        name: 'history',
        initialState,
        reducers:
        {
        },
        extraReducers(builder) {
            builder.addCase(fetchHistoryAsync.fulfilled, (state, action) => {
                debugger;
                state.Histories = action.payload;
                debugger;
            })
        },
    }
);

//export const { fetchFromApi } = historySlice.actions;
export const selectCount = (state: RootState) => state.Histories;
export default historySlice.reducer;