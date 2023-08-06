import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, ToggleButtonGroup, ToggleButton, Switch, FormControlLabel, Typography } from '@mui/material';
import ArcadeIcon from '../shared/icons/arcade-icon';
import AdvancedIcon from '../shared/icons/advanced';
import ProIcon from '../shared/icons/pro-icon';
import { planSelectionSlice } from '../shared/planSlice';
import { ReduxState } from '../shared/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ArcadeButton() {
    return (<Box>
        <ArcadeIcon />
        <div>Arcade</div>
        <div>$90/yr</div>
        <div>2 months free</div>
    </Box>);
}

function AdvancedButton() {
    return (<Box>
        <AdvancedIcon />
        <div>Advanced</div>
        <div>$120/yr</div>
        <div>2 months free</div>
    </Box>)
}

function ProButton() {
    return (<Box>
        <ProIcon />
        <div>Pro</div>
        <div>$150/yr</div>
        <div>2 months free</div>
    </Box>)
}

export default function SelectYourPlan() {
    const { plan, is_yearly: is_monthly } = useSelector((state: ReduxState) => state.planInfo);
    const dispatch = useDispatch();
    return (<Box>
        <FormControl>
            <Typography variant="h1">Select your plan</Typography>
            <div>You have the option of monthly or yearly billing.</div>
            <ToggleButtonGroup color="primary"
                value={plan}
                exclusive
                onChange={(e, selection) => dispatch(planSelectionSlice.actions.setPlan(selection))}
                aria-label="Platform">
                <ToggleButton value="arcade"><ArcadeButton /></ToggleButton>
                <ToggleButton value="advanced"><AdvancedButton /></ToggleButton>
                <ToggleButton value="pro"><ProButton /></ToggleButton>
            </ToggleButtonGroup>
            <FormControlLabel control={<Switch defaultChecked value={is_monthly} onChange={(e, checked) => dispatch(planSelectionSlice.actions.setIsYearly(checked))}/>} label="Yearly" />
        </FormControl>
        </Box>);
}
