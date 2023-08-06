import { Box } from "@mui/material";

export default function ThankYou() {
    return (<Box>
        <h1>Thank you!</h1>
        <div>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</div>
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