import {HYDRATE} from "next-redux-wrapper";

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface RegistrationState {
  step: number;
  hasPrevious: boolean,
  hasNext: boolean,
  nSteps: number
}

// Initial state
const initialState: RegistrationState = {
  step:1,
  hasPrevious: true,
  hasNext:true,
  nSteps: 4
};

// Actual Slice
export const registrationSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // Actions to update the slider
    goNext(state, action) {
      state.step++;
      state.hasNext = state.step <= state.nSteps;
      state.hasPrevious = state.step > 1;
    },
    goPrevious(state, action) {
      state.step--;
      state.hasNext = state.step <= state.nSteps;
      state.hasPrevious = state.step > 1;
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { goNext } = registrationSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default registrationSlice.reducer;