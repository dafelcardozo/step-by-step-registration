import { Box, FormControl, Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addOnsSlice } from "../shared/addOnsSlice";
import { ReduxState } from "../shared/store";


function OnlineServiceLabel() {
    return (<div>
        <div>Online service</div>
        <div>+$1/mo</div>
        <div>Access to multiplayer games</div>
    </div>);
}

function LargerStorageLabel() {
    return (<div>
        <div>Larger storage</div>
        <div>+$2/mo</div>
        <div>Extra 1TB of cloud save</div>
    </div>);
}

function CustomizableProfile() {
    return (<div>
        <div>Customizable Profile</div>
        <div>+2/mo</div>
        <div>Custom theme on your profile</div>
    </div>);
}

export default function PickAddOns() {
    const dispatch = useDispatch();
    const { onlineService, largerStorage, customizableProfile } = useSelector((state: ReduxState) => state.addOns);
    
    return (<Box>
            <h1>Pick add-ons</h1>
            <div>Add-ons help enhance your gaming experience.</div>
        <FormControl>
            <FormControlLabel control={<Checkbox value={onlineService} onChange={(e, checked) => dispatch(addOnsSlice.actions.setOnlineService(checked))} />} label={<OnlineServiceLabel />} />
            <FormControlLabel control={<Checkbox value={largerStorage} onChange={(e, checked) => dispatch(addOnsSlice.actions.setLargerStorage(checked))} />} label={<LargerStorageLabel />} />
            <FormControlLabel control={<Checkbox value={customizableProfile} onChange={(e, checked) => dispatch(addOnsSlice.actions.setCustomizableProfile(checked))} />} label={<CustomizableProfile />} />
        </FormControl>
    </Box>);
}