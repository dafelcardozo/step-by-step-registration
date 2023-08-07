import { useEffect, useState } from 'react'; 
import { FormControl, ToggleButtonGroup, ToggleButton, Switch, FormControlLabel, Typography, useTheme, useMediaQuery, Grid, FormHelperText } from '@mui/material';
import ArcadeIcon from '../shared/icons/arcade-icon';
import AdvancedIcon from '../shared/icons/advanced';
import ProIcon from '../shared/icons/pro-icon';
import { setIsYearly, setPlan } from '../shared/planSlice';
import { ReduxState } from '../shared/store';
import { useSelector, useDispatch } from 'react-redux';
import { goNext, resetValidation } from '../shared/navigationSlice';

import { styled } from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: '#F8F9FF',
        borderColor: '#483EFF',
        borderRadius: '8px'
    }
});

const monthlyPlanPricing:{ [key: string]: number } = { 'arcade': 9, 'advanced': 12, 'pro': 15 };
const yearlyPlanPricing:{ [key: string]: number } = { 'arcade': 90, 'advanced': 120, 'pro': 150 };

interface PlanButtonProps {
    plan:string,
    icon: JSX.Element
}

function PlanButton({plan, icon}:PlanButtonProps) {
    const { is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const period = is_yearly ? 'yr' : 'mo';
    const planPricing = is_yearly? yearlyPlanPricing:monthlyPlanPricing;
    return (<Grid container>
        <Grid item xs={3}>
            {icon}
        </Grid>
        <Grid>
            <div>{plan}</div>
            <div>${planPricing[plan]}/{period}</div>
            {is_yearly && <div>2 months free</div>}
        </Grid>
    </Grid>);
}

export default function SelectYourPlan() {
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
    const { step, is_valid_step } = useSelector((state: ReduxState) => state.nav);

    const [planError, setPlanError] = useState('');
    useEffect(() => {
        console.info('Use effect');
        if (step == 2 && is_valid_step === 'validating') {
            console.info('Validating');
            if (!plan) {
                setPlanError('You need to select a plan here!');
                return;
            }
            dispatch(goNext(''));
        }
    }, [step, is_valid_step])
    return (
        <FormControl error={planError !== ''}>
            <Typography variant="h1">Select your plan</Typography>
            <div>You have the option of monthly or yearly billing.</div>
            <ToggleButtonGroup color="primary" orientation={isExtraSmallSize ? 'vertical' : undefined}
                value={plan}
                exclusive
                onChange={(e, selection) => {
                    dispatch(setPlan(selection));
                    dispatch(resetValidation(''));
                    setPlanError('');
                }}
                aria-label="Platform" sx={{ '&.Mui-selected': { color: 'red' }, padding: '5px', '& .MuiToggleButtonGroup-grouped': { margin: '10px' } }}>
                <StyledToggleButton value="arcade" ><PlanButton plan="arcade" icon={<ArcadeIcon />} /></StyledToggleButton>
                <StyledToggleButton value="advanced" ><PlanButton plan="advanced" icon={<AdvancedIcon />}/></StyledToggleButton>
                <StyledToggleButton value="pro" ><PlanButton plan="pro" icon={<ProIcon />} /></StyledToggleButton>
            </ToggleButtonGroup>
            <FormHelperText >{planError}</FormHelperText>
            <FormControlLabel sx={{ backgroundColor: '#F8F9FF' }} control={<Switch checked={is_yearly} onChange={(e, checked) => dispatch(setIsYearly(checked))} />} label="Yearly" />
        </FormControl>
    );
}
