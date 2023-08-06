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
        state.email = action.payload;
    },
    setPhone(state, action) {
        state.phone = action.payload;
    }

  }
});

export const { setName, setEmail, setPhone } = personalInfoSlice.actions;

export const PIState = (state: AppState) => state.auth.authState;

export default personalInfoSlice.reducer;