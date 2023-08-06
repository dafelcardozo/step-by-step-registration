import { Button } from '@mui/material';
import { useDispatch} from 'react-redux';

export type ContentSlideProps = {
    hasPrevious: boolean,
    hasNext: boolean,
    onBackClicked: () => void,
    onNextClicked: () => void,
    children: any
}

export default function ContentSlide({hasPrevious, hasNext, onBackClicked, onNextClicked, children}:ContentSlideProps) {
    //const dispatch = useDispatch();

    return (<div>
        <div>
            {children}
        </div>
        { <Button variant="contained" onClick={onBackClicked}>Go back</Button>}
        { <Button variant="contained" onClick={onNextClicked}>Next Step</Button>}
    </div>);
}