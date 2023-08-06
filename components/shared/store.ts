import { authSlice } from "./authSlice";
import { registrationSlice, RegistrationState } from './registrationSlice';
import {personalInfoSlice, PersonalInfoState} from './personalInfoSlice'
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
  [registrationSlice.name]: registrationSlice.reducer,
  [personalInfoSlice.name]: personalInfoSlice.reducer
});

const reducer = (state:any, action:any) => {
    return combinedReducer(state, action);
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

const makeStore = () => store;

export const wrapper = makeStore;

export interface ReduxState {
  [registrationSlice.name]: RegistrationState,
  [personalInfoSlice.name]: PersonalInfoState
}