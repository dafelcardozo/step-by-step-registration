import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface AddOnsState {
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean
}

const initialState: AddOnsState = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
};

export const addOnsSlice = createSlice({
    name: "addOns",
    initialState,
    reducers: {
        setOnlineService(state, action) {
            state.onlineService = action.payload;
        },
        setLargerStorage(state, action) {
            state.largerStorage = action.payload;
        },
        setCustomizableProfile(state, action) {
            state.customizableProfile = action.payload;
        }
    }
});

export const { setOnlineService, setLargerStorage, setCustomizableProfile } = addOnsSlice.actions;

export const planState = (state: AppState) => state.planInfo;

export default addOnsSlice.reducer;