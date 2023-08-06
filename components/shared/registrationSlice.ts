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
      state.hasPrevious = state.step > 1 && state.step < 5;
    },
    goPrevious(state, action) {
      state.step--;
      state.hasNext = state.step < state.nSteps;
      state.hasPrevious = state.step > 1 && state.step < 5;
    }
  }
});

export const { goNext } = registrationSlice.actions;

export const registerState = (state: AppState) => state.auth.authState;

export default registrationSlice.reducer;