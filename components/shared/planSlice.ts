import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PlanSelectionState {
  plan: string;
  is_yearly: boolean,
  periodAbbrev: string,
  period: string,
  periodAdverb: string
}

const monthlyPeriod = {  
  periodAbbrev: 'mo',
  period: 'month',
  periodAdverb: 'monthly'
}

const initialState: PlanSelectionState = {
  plan: '',
  is_yearly: false, 
  ...monthlyPeriod
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
        if (state.is_yearly) {
          state.periodAbbrev = 'mo';
          state.period = 'month';
          state.periodAdverb = 'monthly';
        } else {
          state.periodAbbrev = 'yr';
          state.period = 'year';
          state.periodAdverb = 'yearly';
        }
    }
  }
});

export const { setPlan, setIsYearly } = planSelectionSlice.actions;

export const PState = (state: AppState) => state.planInfo;

export default planSelectionSlice.reducer;