import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { logs } from "./initialState";
import { OrderHistory, History } from "./Types/HistoryTypes";

const fetchOrderHistoriesAsync = <T>(url: string): Promise<T> => 
{
    return fetch(url)
        .then(async response => {
            
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const data : string =  await response.text();
            return JSON.parse(data, (key: any, value: any) => 
            {
                if (typeof value === 'string')
                {
                    let a = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/.exec(value);
                    if (a)
                    {
                        return new Date(Date.parse(value));
                    }
                }

                return value;
            });
        });
}
    

export const fetchHistoryAsync = createAsyncThunk(
    'history/fetchHistory',
    async () => 
    {
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
            builder.addCase(fetchHistoryAsync.fulfilled, (state, action : PayloadAction<Array<OrderHistory>>) => {
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