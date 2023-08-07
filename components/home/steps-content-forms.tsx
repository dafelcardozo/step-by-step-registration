import { Button, Box, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, goPrevious } from '@/components/shared/registrationSlice';
import { ReduxState } from '@/components/shared/store';
import PersonalInfoForm from './personal-info-form';
import SelectYourPlan from './select-plan';
import PickAddOns from './pick-add-ons';
import Summary from './summary';
import ThankYou from './thank-you';
import { useMediaQuery, useTheme } from "@mui/material";

export function ButtonsBar() {
    const { hasPrevious, hasNext, step } = useSelector((state: ReduxState) => state.register);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isExtraSmallSize =  useMediaQuery(theme.breakpoints.down("md"));
    return (<Box
        m={1}
        display="flex"
        flexDirection='row'
        justifyContent="end"
        alignItems="flex-end">
            <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Button variant="text" onClick={() => dispatch(goPrevious(''))} sx={{ display: hasPrevious ? undefined : 'none' }}>Go back</Button>
            <Button variant="contained" onClick={() => dispatch(goNext(''))} sx={{ display: step < 5 && hasNext ? undefined : 'none' }}>{step == 4 ? 'Confirm' : 'Next Step'}</Button>

            </Box>
    </Box>)
}


export default function StepsContent() {
    const { step } = useSelector((state: ReduxState) => state.register);
    const theme = useTheme();
    const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
    return (<Card>
        {step == 1 && <PersonalInfoForm />}
        {step == 2 && <SelectYourPlan />}
        {step == 3 && <PickAddOns />}
        {step == 4 && <Summary />}
        {step == 5 && <ThankYou />}
        {!isExtraSmallSize && <ButtonsBar />}
    </Card>);
}