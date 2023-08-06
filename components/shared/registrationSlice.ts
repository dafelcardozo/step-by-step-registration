import {HYDRATE} from "next-redux-wrapper";

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface RegistrationState {
  step: number;
  hasPrevious: boolean,
  hasNext: boolean
}

// Initial state
const initialState: RegistrationState = {
  step:1,
  hasPrevious: true,
  hasNext:true,
};

// Actual Slice
export const registrationSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // Actions to update the slider
    goNext(state, action) {
      state.hasNext = action.payload;
    },
    goPrevious(state, action) {
      state.hasPrevious = action.payload
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

//export const selectAuthState = (state: AppState) => state.auth.authState;

export default registrationSlice.reducer;