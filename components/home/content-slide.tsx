import { Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registrationSlice } from '@/components/shared/registrationSlice';
import { ReduxState } from '@/components/shared/store';
import { PropsWithChildren } from 'react';

export default function ContentSlide({ children }: PropsWithChildren) {
    const { hasPrevious, hasNext } = useSelector((state: ReduxState) => state.register);
    const dispatch = useDispatch();
    return (<div>
        <div>
            {children}
        </div>
        <Box component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <div><Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goPrevious(''))} sx={{ display: hasPrevious ? undefined : 'none' }}>Go back</Button></div>
            <div><Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goNext(''))} sx={{ display: hasNext ? undefined : 'none' }}>Next Step</Button></div>
        </Box>
    </div>);
}