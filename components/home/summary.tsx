import { Box, Link, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../shared/store";
import { goToStep } from "../shared/registrationSlice";

const monthlyPlanPricing:{ [key: string]: number } = { 'arcade': 9, 'advanced': 12, 'pro': 15 };
const yearlyPlanPricing:{ [key: string]: number } = { 'arcade': 90, 'advanced': 120, 'pro': 150 };



export default function Summary() {
    const dispatch = useDispatch();
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const { customizableProfile, largerStorage, onlineService } = useSelector((state: ReduxState) => state.addOns);
    const pricing = is_yearly ? yearlyPlanPricing : monthlyPlanPricing;
    const p_desc = is_yearly ? 'yr' : 'mo';

    return (<Box>
        <Typography variant="h1">Finishing up</Typography>
        <div>Double-check everything looks OK before confirming.</div>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
            <Grid item xs={6} className='plan_title'>
                <div>{plan} ({is_yearly ? 'Yearly' : 'Monthly'})</div>
                <Link onClick={() => dispatch(goToStep(2))}>Change</Link>
            </Grid>
            <Grid item xs={6}>
                {pricing[plan]}/{p_desc}
            </Grid>
            {onlineService &&
                <>
                    <Grid item xs={6} >
                        Online service
                    </Grid>
                    <Grid item xs={6} >+$1/{p_desc}</Grid>
                </>
            }
            {largerStorage && <>
                <Grid item xs={6}  >
                    Larger storage
                </Grid>
                <Grid item xs={6}>+$2/{p_desc}</Grid>
            </>
            }
            {customizableProfile &&
                <>
                    <Grid item xs={6}  >
                        Customizable profile
                    </Grid>
                    <Grid item xs={6}>+$2/{p_desc}</Grid>
                </>
            }
            <Grid item xs={6}  >
                Total (per month)
            </Grid>
            <Grid item xs={6}  >(Bug total calculation)</Grid>
        </Grid>
    </Box>);
}