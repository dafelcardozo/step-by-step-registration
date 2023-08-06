import { Box, FormControl, Checkbox, FormControlLabel } from "@mui/material";

export default function PickAddOns() {
    return (<Box>
            <h1>Pick add-ons</h1>
            <div>Add-ons help enhance your gaming experience.</div>
        <FormControl>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Online service" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Larger storage" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Customizable profile" />
        </FormControl>
    </Box>);
}