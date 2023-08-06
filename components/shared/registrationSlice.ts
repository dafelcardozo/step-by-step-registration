import {HYDRATE} from "next-redux-wrapper";

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface RegistrationState {
  step: number;
  hasPrevious: boolean,
  hasNext: boolean,
  nSteps: number
}

const initialState: RegistrationState = {
  step:1,
  hasPrevious: true,
  hasNext:true,
  nSteps: 5
};

export const registrationSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    goNext(state, action) {
      state.step++;
      state.hasNext = state.step < state.nSteps;
      state.hasPrevious = state.step > 1;
    },
    goPrevious(state, action) {
      state.step--;
      state.hasNext = state.step < state.nSteps;
      state.hasPrevious = state.step > 1;
    }
  }
});

export const { goNext } = registrationSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default registrationSlice.reducer;