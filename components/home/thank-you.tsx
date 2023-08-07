import { Box, Typography } from "@mui/material";
import ThankYouIcon from "../shared/icons/thank-you-icon";

export default function ThankYou() {
    return (<Box>
        <ThankYouIcon />
        <Typography variant="h1" style={{textAlign:'center'}}>Thank you!</Typography>
        <div style={{textAlign:'center'}}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</div>
        
    </Box>);
}