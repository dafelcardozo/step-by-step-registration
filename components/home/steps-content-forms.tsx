import { Button, Box, Card, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, goPrevious, validateStep } from '@/components/shared/navigationSlice';
import { ReduxState } from '@/components/shared/store';
import PersonalInfoForm from './personal-info-form';
import SelectYourPlan from './select-plan';
import PickAddOns from './pick-add-ons';
import Summary from './summary';
import ThankYou from './thank-you';
import { useMediaQuery, useTheme } from "@mui/material";

export function ButtonsBar() {
    const { hasPrevious, hasNext, step } = useSelector((state: ReduxState) => state.nav);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));

    const nextClicked = () => {
        if ([1, 2].includes(step))
            dispatch(validateStep(''));
        else
            dispatch(goNext(''))
    }
    return (<Box
        m={1}
        display="flex"
        justifyContent="end" width={isExtraSmallSize?'100vw':undefined}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6} alignItems="flex-start">
                <Button variant="text" onClick={() => dispatch(goPrevious(''))} sx={{ display: hasPrevious ? undefined : 'none' }}>Go back</Button>
            </Grid>
            <Grid item xs={6} alignItems="flex-end">
                <Button variant="contained" onClick={nextClicked} sx={{ display: step < 5 && hasNext ? undefined : 'none' }}>{step == 4 ? 'Confirm' : 'Next Step'}</Button>
            </Grid>
        </Grid>
    </Box>)
}


export default function StepsCard() {
    const { step } = useSelector((state: ReduxState) => state.nav);
    const theme = useTheme();
    const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
    return (<Card sx={{minHeight:'402px', p:4 }}>
        {step == 1 && <PersonalInfoForm />}
        {step == 2 && <SelectYourPlan />}
        {step == 3 && <PickAddOns />}
        {step == 4 && <Summary />}
        {step == 5 && <ThankYou />}
        {!isExtraSmallSize && <ButtonsBar />}
    </Card>);
}