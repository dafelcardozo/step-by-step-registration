import { Box, FormControl, Checkbox, FormControlLabel, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCustomizableProfile, setLargerStorage, setOnlineService } from "../shared/addOnsSlice";
import { ReduxState } from "../shared/store";


type AddOnCardProps = {
    title: string,
    price: string,
    description: string
}

function AddOnCard({title, price, description}: AddOnCardProps) {
    return (<>
        <div>{title}</div>
        <Typography align="right">{price}</Typography>
        <div>{description}</div>
    </>);
}

function OnlineServiceLabel() {
    return <AddOnCard title="Online service" price="+$1/mo" description="Access to multiplayer games"/>
}

function LargerStorageLabel() {
    return <AddOnCard title="Larger storage" price="+$2/mo" description="Extra 1TB of cloud save"/>
}

function CustomizableProfile() {
    return (<div>
        <div>Customizable Profile</div>
        <div>+2/mo</div>
        <div>Custom theme on your profile</div>
    </div>);
}

export default function PickAddOns() {
    const { onlineService, largerStorage, customizableProfile } = useSelector((state: ReduxState) => state.addOns);
    const dispatch = useDispatch();
    const labelStyles = {
        padding: '20px',
        border: '1px solid #D6D9E6',
        borderRadius: '8px',
        marginBottom:'10px',
        '&.Mui-checked': {
            backgroundColor:'red',
            color:'yellow',
            borderColor:'red'
         },
       }
    const checkBoxStyles = {
        '&.Mui-checked': {
            color:'#483EFF'
         },
       };
    return (<Box>
            <h1>Pick add-ons</h1>
            <div>Add-ons help enhance your gaming experience.</div>
        <FormControl sx={{padding:'5px'}}>
            <FormControlLabel  sx={labelStyles} control={<Checkbox value={onlineService} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setOnlineService(checked))} />} label={<OnlineServiceLabel />} />
            <FormControlLabel sx={labelStyles} control={<Checkbox value={largerStorage} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setLargerStorage(checked))} />} label={<LargerStorageLabel />} />
            <FormControlLabel sx={labelStyles} control={<Checkbox value={customizableProfile} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setCustomizableProfile(checked))} />} label={<CustomizableProfile />} />
        </FormControl>
    </Box>);
}