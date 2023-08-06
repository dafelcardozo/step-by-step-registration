import { Button } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import {registrationSlice} from '@/components/shared/registrationSlice';

export type ContentSlideProps = {
    hasPrevious: boolean,
    hasNext: boolean,
    children: any
}

export default function ContentSlide({ children}:ContentSlideProps) {
    const {hasPrevious, hasNext }:ContentSlideProps = useSelector(state => state.register);
    const dispatch = useDispatch();
    return (<div>
        <div>
            {children}
        </div>
        { hasPrevious && <Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goPrevious(''))}>Go back</Button>}
        { hasNext && <Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goNext(''))}>Next Step</Button>}
    </div>);
}