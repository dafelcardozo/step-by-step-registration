import { Button } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import {registrationSlice} from '@/components/shared/registrationSlice';
import {ReduxState} from '@/components/shared/store';


export type ContentSlideProps = {
    children: any
}

export default function ContentSlide({ children}:ContentSlideProps) {
    const {hasPrevious, hasNext } = useSelector((state:ReduxState) => state.register);
    const dispatch = useDispatch();
    return (<div>
        <div>
            {children}
        </div>
        { hasPrevious && <Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goPrevious(''))}>Go back</Button>}
        { hasNext && <Button variant="contained" onClick={() => dispatch(registrationSlice.actions.goNext(''))}>Next Step</Button>}
    </div>);
}