import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface NavigationState {
  step: number;
  hasPrevious: boolean,
  hasNext: boolean,
  nSteps: number,
  is_valid_step: string
}

const initialState: NavigationState = {
  step:1,
  hasPrevious: false,
  hasNext:true,
  nSteps: 5,
  is_valid_step: 'invalid'
};

function setButtonsVisibility(state:any) {
  state.hasNext = state.step < state.nSteps;
  state.hasPrevious = state.step > 1 && state.step < 5;
}

export const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    goNext(state, action) {
      state.step++;
      state.is_valid_step ='invalid';
      setButtonsVisibility(state);
    },
    goPrevious(state, action) {
      state.step--;
      state.is_valid_step ='invalid';
      setButtonsVisibility(state);
    },
    goToStep(state, action) {
      state.step = action.payload;
      state.is_valid_step ='invalid';
      setButtonsVisibility(state);
    },
    validateStep(state, action) {
      state.is_valid_step = 'validating';
    },
    resetValidation(state, action) {
      state.is_valid_step = 'invalid';
    }
  }
});

export const { goNext, goPrevious, goToStep, validateStep, resetValidation } = navigationSlice.actions;

export const navigationState = (state: AppState) => state.nav;

export default navigationSlice.reducer;