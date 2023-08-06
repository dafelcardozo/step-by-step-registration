import {HYDRATE} from "next-redux-wrapper";

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PersonalInfoState {
  name: string;
  email: string,
  phone: string,
}

const initialState: PersonalInfoState = {
  name:'',
  email: '',
  phone: '',
};

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
        state.name = action.payload;
    },
    setPhone(state, action) {
        state.phone = action.payload;
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

export const { setName, setEmail, setPhone } = personalInfoSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default personalInfoSlice.reducer;