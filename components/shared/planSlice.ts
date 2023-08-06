import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PlanSelectionState {
  plan: string;
  is_monthly: boolean,
}

const initialState: PlanSelectionState = {
  plan: '',
  is_monthly: false,
};

export const planSelectionSlice = createSlice({
  name: "planInfo",
  initialState,
  reducers: {
    setPlan(state, action) {
      state.plan = action.payload;
    },
    setIsMonthly(state, action) {
        state.is_monthly = action.payload;
    }
  }
});

export const { setPlan, setIsMonthly } = planSelectionSlice.actions;

//export const planState = (state: AppState) => state..planInfo.authState;

export default planSelectionSlice.reducer;