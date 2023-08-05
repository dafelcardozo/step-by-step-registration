import { Button } from '@mui/material';

export type ContentSlideProps = {
    hasPrevious: boolean,
    hasNext: boolean,
    onBackClicked: () => void,
    onNextClicked: () => void,
    children: any
}

export default function ContentSlide({hasPrevious, hasNext, onBackClicked, onNextClicked, children}:ContentSlideProps) {
    return (<div>
        <div>
            {children}
        </div>
        {hasPrevious && <Button variant="contained" onClick={onBackClicked}>Go back</Button>}
        {hasNext && <Button variant="contained" onClick={onNextClicked}>Next Step</Button>}
    </div>);
}