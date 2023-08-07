import * as React from 'react';
import { FormControl, ToggleButtonGroup, ToggleButton, Switch, FormControlLabel, Typography, useTheme, useMediaQuery, Grid } from '@mui/material';
import ArcadeIcon from '../shared/icons/arcade-icon';
import AdvancedIcon from '../shared/icons/advanced';
import ProIcon from '../shared/icons/pro-icon';
import { setIsYearly, setPlan } from '../shared/planSlice';
import { ReduxState } from '../shared/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { styled } from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "red",
        backgroundColor: '#F8F9FF',
        borderColor: '#483EFF',
        borderRadius: '8px'
    }
});

function ArcadeButton() {
    return (<Grid container>
        <Grid item xs={3}>
            <ArcadeIcon />
        </Grid>
        <Grid>
            <div>Arcade</div>
            <div>$90/yr</div>
            <div>2 months free</div>
        </Grid>
    </Grid>);
}

function AdvancedButton() {
    return (<Grid container>
        <Grid item xs={3}>
            <AdvancedIcon />
        </Grid>
        <Grid>
            <div>Advanced</div>
            <div>$120/yr</div>
            <div>2 months free</div>
        </Grid>
    </Grid>)
}

function ProButton() {
    return (<Grid container>
        <Grid item xs={3}>
        <ProIcon />
        </Grid>
        <Grid>
            <div>Pro</div>
            <div>$150/yr</div>
            <div>2 months free</div>
        </Grid>

    </Grid>)
}

export default function SelectYourPlan() {
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <FormControl>
            <Typography variant="h1">Select your plan</Typography>
            <div>You have the option of monthly or yearly billing.</div>
            <ToggleButtonGroup color="primary" orientation={isExtraSmallSize ? 'vertical' : undefined}
                value={plan}
                exclusive
                onChange={(e, selection) => dispatch(setPlan(selection))}
                aria-label="Platform" sx={{ '&.Mui-selected': { color: 'red' }, padding: '5px', '& .MuiToggleButtonGroup-grouped': { margin: '10px' } }}>
                <StyledToggleButton value="arcade" ><ArcadeButton /></StyledToggleButton>
                <StyledToggleButton value="advanced" ><AdvancedButton /></StyledToggleButton>
                <StyledToggleButton value="pro" ><ProButton /></StyledToggleButton>
            </ToggleButtonGroup>
            <FormControlLabel sx={{ backgroundColor: '#F8F9FF' }} control={<Switch checked={is_yearly} onChange={(e, checked) => dispatch(setIsYearly(checked))} />} label="Yearly" />
        </FormControl>
    );
}
