import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, ToggleButtonGroup, ToggleButton, Switch, FormControlLabel } from '@mui/material';

export default function SelectYourPlan() {
    const [plan, setPlan] = React.useState('');
    return (<Box>
        <FormControl>
            <h1>Select your plan</h1>
            <div>You have the option of monthly or yearly billing.</div>
            <ToggleButtonGroup color="primary"
                value={plan}
                exclusive
                onChange={(e, selection) => setPlan(selection)}
                aria-label="Platform">
                <ToggleButton value="arcade">Arcade</ToggleButton>
                <ToggleButton value="advanced">Advanced</ToggleButton>
                <ToggleButton value="pro">Pro</ToggleButton>
            </ToggleButtonGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Yearly" />
        </FormControl>
        </Box>);
}
