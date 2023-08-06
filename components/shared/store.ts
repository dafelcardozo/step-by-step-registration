import { authSlice } from "./authSlice";
import { registrationSlice } from './registrationSlice';
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//import { ActionTypes } from "@mui/base";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;




const combinedReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [registrationSlice.name]: registrationSlice.reducer
});

const reducer = (state:any, action:any) => {
    return combinedReducer(state, action);
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);