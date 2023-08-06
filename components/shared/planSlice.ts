import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PlanSelectionState {
  plan: string;
  is_yearly: boolean,
}

const initialState: PlanSelectionState = {
  plan: '',
  is_yearly: false,
};

export const planSelectionSlice = createSlice({
  name: "planInfo",
  initialState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setIsYearly(state, action) {
        state.is_yearly = action.payload;
    }
  }
});

export const { setPlan, setIsYearly } = planSelectionSlice.actions;

export const planState = (state: AppState) => state.planInfo;

export default planSelectionSlice.reducer;