import { createSlice } from '@reduxjs/toolkit';
import { Device } from './Types/Device';
import { RootState } from '../../redux/store';
const initialState: Device = 
{
    Devices : [
        {
            Type : "Terminal",
            Name : "PrivatBankTerminal",
            Actions : [
                {
                    Name : "Перевірити статус",
                    Link : "http://example.com" 
                }
            ],
            IsError : false,
            ErrorDescription : "asdfasd"
        },
        {
            Type : "Integration",
            Name : "Syrve",
            Actions : [
                {
                    Name : "Перевірити статус",
                    Link : "http://example.com" 
                }
            ],
            IsError : false,
            ErrorDescription : "asdfasd"
        },
        {
            Type : "Printer",
            Name : "ThermalPrinter",
            Actions : [
                {
                    Name : "Перевірити статус",
                    Link : "http://example.com" 
                },
                {
                    Name : "X-Звіт",
                    Link : "http://example.com" 
                },
                {
                    Name : "Z-Звіт",
                    Link : "http://example.com" 
                },
                {
                    Name : "Анулювати чек",
                    Link : "http://example.com" 
                },
                {
                    Name : "Друк нульового чеку",
                    Link : "http://example.com" 
                }
            ],
            IsError : true,
            ErrorDescription : "Закінчився папір"
        }
    ]
};

export const historySlice = createSlice(
    {
        name: 'history',
        initialState,
        reducers:
        {
        },
        extraReducers(builder) {
            // builder.addCase(fetchHistoryAsync.fulfilled, (state, action : PayloadAction<Array<OrderHistory>>) => {
            //     debugger;
            //     state.Histories = action.payload;
            //     debugger;
            // })
        },
    }
);

//export const { fetchFromApi } = historySlice.actions;
export const selectDevices = (state: RootState) => state.devicesReducer.Devices;
export default historySlice.reducer;