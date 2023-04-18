import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import hostoryReducer from '../reducers/logsReducer/historyReducer';
import devicesReducer from '../reducers/devicesReducer/deviceReducer';

export const store = configureStore(
    {
        reducer: {
          hostoryReducer : hostoryReducer,
          devicesReducer : devicesReducer
        }
    });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;