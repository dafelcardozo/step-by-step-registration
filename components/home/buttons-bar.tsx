import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, goPrevious, validateStep } from '@/components/shared/navigationSlice';
import { ReduxState } from '@/components/shared/store';


export function ButtonsBar() {
    const { hasPrevious, hasNext, step } = useSelector((state: ReduxState) => state.nav);
    const dispatch = useDispatch();

    const nextClicked = () => {
        if ([1, 2].includes(step))
            dispatch(validateStep(''));
        else
            dispatch(goNext(''));
    };
    return (
        <Grid container columnSpacing={{ xs: 1,  md: 3 }} height='72px' bgcolor='white'>
            <Grid item xs={6} alignItems="flex-start">
                {hasPrevious?<Button variant="text" onClick={() => dispatch(goPrevious(''))} >Go back</Button>:<></>}
            </Grid>
            <Grid item xs={6} alignItems="flex-end">
                <Button variant="contained" onClick={nextClicked} sx={{ display: step < 5 && hasNext ? undefined : 'none' }}>{step == 4 ? 'Confirm' : 'Next Step'}</Button>
            </Grid>
        </Grid>
    );
}
