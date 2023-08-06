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

function setButtonsVisibility(state:any) {
  state.hasNext = state.step < state.nSteps;
  state.hasPrevious = state.step > 1 && state.step < 5;
}

export const registrationSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    goNext(state, action) {
      state.step++;
      setButtonsVisibility(state);
    },
    goPrevious(state, action) {
      state.step--;
      setButtonsVisibility(state);
    },
    goToStep(state, action) {
      state.step = action.payload;
      setButtonsVisibility(state);
    },

  }
});

export const { goNext, goPrevious, goToStep } = registrationSlice.actions;

export const registerState = (state: AppState) => state.register;

export default registrationSlice.reducer;