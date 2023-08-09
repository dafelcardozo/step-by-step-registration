import { Box, Link, Grid, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../shared/store";
import { goToStep } from "../shared/navigationSlice";

const monthlyPlanPricing: { [key: string]: number } = { 'arcade': 9, 'advanced': 12, 'pro': 15 };
const yearlyPlanPricing: { [key: string]: number } = { 'arcade': 90, 'advanced': 120, 'pro': 150 };

type AddOnRowProps = {
    description: string,
    monthlyPrice: number
}

const servicePricing = (is_yearly: boolean, base_price: number) => is_yearly ? base_price * 10 : base_price;

function AddOnRow({ description, monthlyPrice }: AddOnRowProps) {
    const { is_yearly, periodAbbrev } = useSelector((state: ReduxState) => state.planInfo);
    return (<>
        <Grid item xs={6}  >
            {description}
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>+${servicePricing(is_yearly, monthlyPrice)}/{periodAbbrev}</Grid>
    </>)
}


export default function Summary() {
    const dispatch = useDispatch();
    const { plan, is_yearly, periodAbbrev, period } = useSelector((state: ReduxState) => state.planInfo);
    const { customizableProfile, largerStorage, onlineService } = useSelector((state: ReduxState) => state.addOns);
    const pricing = is_yearly ? yearlyPlanPricing : monthlyPlanPricing;
    const planPricing = pricing[plan];
    const onlineServicePricing = onlineService ? servicePricing(is_yearly, 1) : 0;
    const largerStoragePricing = largerStorage ? servicePricing(is_yearly, 2) : 0;
    const customizableProfilePricing = customizableProfile ? servicePricing(is_yearly, 2) : 0;
    const bigSum = planPricing + onlineServicePricing + largerStoragePricing + customizableProfilePricing;

    return (<Box>
        <Typography variant="h1">Finishing up</Typography>
        <Typography variant="subtitle1">Double-check everything looks OK before confirming.</Typography>
        <Paper sx={{ bgcolor: '#F8F9FF' }}>
            <Grid container rowSpacing={1} columnSpacing={{  sm: 2, md: 3 }} >
                <Grid item xs={6} className='plan_title' >
                    <Typography variant="subtitle2">{plan} ({is_yearly ? 'Yearly' : 'Monthly'})</Typography>
                    <Link onClick={() => dispatch(goToStep(2))}>Change</Link>
                </Grid>
                <Grid item xs={6} sx={{textAlign:'right'}}>
                    <Typography variant="subtitle2">{planPricing}/{periodAbbrev} </Typography>
                </Grid>
                {onlineService && <AddOnRow description="Online service" monthlyPrice={1} />}
                {largerStorage && <AddOnRow description="Larger storage" monthlyPrice={2} />}
                {customizableProfile && <AddOnRow description="Customizable profile" monthlyPrice={2} />}
            </Grid>
        </Paper>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 3 }} >
            <Grid item xs={6}>
                Total (per {period})
            </Grid>
            <Grid item xs={6} sx={{ color: '#483EFF', fontWeight: '700', fontSize: '16px', textAlign: 'right' }}>+${bigSum}/{periodAbbrev}</Grid>
        </Grid>
    </Box>);
}