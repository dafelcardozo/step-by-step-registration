import { Box, Link, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../shared/store";
import { goToStep } from "../shared/registrationSlice";

const monthlyPlanPricing: { [key: string]: number } = { 'arcade': 9, 'advanced': 12, 'pro': 15 };
const yearlyPlanPricing: { [key: string]: number } = { 'arcade': 90, 'advanced': 120, 'pro': 150 };

type AddOnRowProps = {
    selected: boolean,
    description: string,
    monthlyPrice: number
}

function AddOnRow({ selected, description, monthlyPrice }: AddOnRowProps) {
    const { is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const period = is_yearly ? 'yr' : 'mo';
    return (selected?
        <>
            <Grid item xs={6}  >
                {description}
            </Grid>
            <Grid item xs={6}>+${is_yearly ? monthlyPrice * 10 : monthlyPrice}/{period}</Grid>
        </>:<></>
    )
}


export default function Summary() {
    const dispatch = useDispatch();
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const { customizableProfile, largerStorage, onlineService } = useSelector((state: ReduxState) => state.addOns);
    const pricing = is_yearly ? yearlyPlanPricing : monthlyPlanPricing;
    const period = is_yearly ? 'yr' : 'mo';

    return (<Box>
        <Typography variant="h1">Finishing up</Typography>
        <Typography variant="subtitle1">Double-check everything looks OK before confirming.</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
            <Grid item xs={6} className='plan_title'>
                <div>{plan} ({is_yearly ? 'Yearly' : 'Monthly'})</div>
                <Link onClick={() => dispatch(goToStep(2))}>Change</Link>
            </Grid>
            <Grid item xs={6}>
                {pricing[plan]}/{period}
            </Grid>
            <AddOnRow selected={onlineService} description="Online service" monthlyPrice={1}/>
            <AddOnRow selected={largerStorage} description="Larger storage" monthlyPrice={2} />
            <AddOnRow selected={customizableProfile} description="Customizable profile" monthlyPrice={2}/>
            <Grid item xs={6}>
                Total (per {is_yearly ? 'month' : 'year'})
            </Grid>
            <Grid item xs={6}>(Big total calculation)/{period}</Grid>
        </Grid>
    </Box>);
}