import { Box } from "@mui/material";

export default function Summary() {
    return (<Box>
        <h1>Finishing up</h1>
        <div>Double-check everything looks OK before confirming.</div>
        <div>
            <div>(plan)</div>
            <button>Change</button>
        </div>
        <div>
            (add-ons list + costs)
        </div>
        <div>
            Total (per month)
            <div >(Bug total calculation)</div>
        </div>
    </Box>);
}