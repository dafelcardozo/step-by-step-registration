import { useEffect, useState } from 'react'; 
import { FormControl, ToggleButtonGroup, ToggleButton, Switch, Typography, Grid, FormHelperText } from '@mui/material';
import ArcadeIcon from '../shared/icons/arcade-icon';
import AdvancedIcon from '../shared/icons/advanced';
import ProIcon from '../shared/icons/pro-icon';
import { setIsYearly, setPlan } from '../shared/planSlice';
import { ReduxState } from '../shared/store';
import { useSelector, useDispatch } from 'react-redux';
import { goToStep, resetValidation } from '../shared/navigationSlice';

import { styled } from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)({
    textAlign:'unset',
    textTransform: 'unset',
    "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: '#F8F9FF',
        borderColor: '#483EFF'
    }
});

const monthlyPlanPricing:{ [key: string]: number } = { 'arcade': 9, 'advanced': 12, 'pro': 15 };
const yearlyPlanPricing:{ [key: string]: number } = { 'arcade': 90, 'advanced': 120, 'pro': 150 };

interface PlanButtonProps {
    plan:string,
    icon: JSX.Element
}

function PlanButton({plan, icon}:PlanButtonProps) {
    const { is_yearly, periodAbbrev } = useSelector((state: ReduxState) => state.planInfo);
    const planPricing = is_yearly? yearlyPlanPricing:monthlyPlanPricing;
    return (<Grid container>
        <Grid item xs={3}>
            {icon}
        </Grid>
        <Grid>
            <Typography variant="subtitle2" className='capitalize'>{plan}</Typography>
            <div>${planPricing[plan]}/{periodAbbrev}</div>
            {is_yearly && <div>2 months free</div>}
        </Grid>
    </Grid>);
}

type CheckedProps = {
    checked: boolean,
    onChange: (checked:boolean) => void
}

function DoubleLabeledSwitch({checked, onChange}:CheckedProps) {
    return (
    <Grid container alignItems="center" spacing={1} bgcolor={'#F8F9FF'}>
        <Grid item className={!checked?'is_checked':undefined} onClick={() => onChange(!checked)}>
            Monthly
        </Grid>
        <Grid item>
            <Switch checked={checked} onChange={(_, checked) => onChange(checked)} />
        </Grid>
        <Grid item className={checked?'is_checked':undefined} onClick={() => onChange(!checked)}>
            Yearly
        </Grid>
    </Grid>)
}

export default function SelectYourPlan() {
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const dispatch = useDispatch();
    const { step, is_valid_step, isSmallSize } = useSelector((state: ReduxState) => state.nav);
    const [planError, setPlanError] = useState('');
    useEffect(() => {
        if (step == 2 && is_valid_step === 'validating') {
            if (!plan) {
                setPlanError('You need to select a plan here!');
                return;
            }
            dispatch(goToStep(3));
        }
    }, [step, is_valid_step])
    return (
        <FormControl error={planError !== ''}>
            <Typography variant="h1">Select your plan</Typography>
            <Typography variant="subtitle1">You have the option of monthly or yearly billing.</Typography>
            <ToggleButtonGroup color="primary" orientation={isSmallSize ? 'vertical' : undefined}
                value={plan}
                exclusive
                onChange={(_, selection) => {
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
            <DoubleLabeledSwitch checked={is_yearly} onChange={(checked) => dispatch(setIsYearly(checked))}/>
        </FormControl>
    );
}
