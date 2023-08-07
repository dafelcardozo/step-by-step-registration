import { Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, goPrevious } from '@/components/shared/registrationSlice';
import { ReduxState } from '@/components/shared/store';
import PersonalInfoForm from './personal-info-form';
import SelectYourPlan from './select-plan';
import PickAddOns from './pick-add-ons';
import Summary from './summary';
import ThankYou from './thank-you';

export default function NavigationButtons() {
    const { hasPrevious, hasNext, step } = useSelector((state: ReduxState) => state.register);
    const dispatch = useDispatch();
    return (<div>
        {step == 1 && <PersonalInfoForm />}
        {step == 2 && <SelectYourPlan />}
        {step == 3 && <PickAddOns />}
        {step == 4 && <Summary />}
        {step == 5 && <ThankYou />}
        <Box component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <div><Button variant="text" onClick={() => dispatch(goPrevious(''))} sx={{ display: hasPrevious ? undefined : 'none' }}>Go back</Button></div>
            <div>
                <Button variant="contained" onClick={() => dispatch(goNext(''))} sx={{ display: step < 5 && hasNext ? undefined : 'none' }}>{step == 4?'Confirm':'Next Step'}</Button>
            </div>
        </Box>
    </div>);
}