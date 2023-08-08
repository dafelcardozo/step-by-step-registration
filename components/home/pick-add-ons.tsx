import { Box, FormControl, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCustomizableProfile, setLargerStorage, setOnlineService } from "../shared/addOnsSlice";
import { ReduxState } from "../shared/store";


type AddOnCardProps = {
    title: string,
    monthlyPrice: number,
    description: string
}

function AddOnCard({ title, monthlyPrice, description }: AddOnCardProps) {
    const { is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const period = is_yearly ? 'yr' : 'mo';
    return (<>
        <div>{title}</div>
        <Typography align="right">{is_yearly?monthlyPrice*10:monthlyPrice}/{period}</Typography>
        <div>{description}</div>
    </>);
}

function OnlineServiceLabel() {
    return <AddOnCard title="Online service" monthlyPrice={1} description="Access to multiplayer games" />
}

function LargerStorageLabel() {
    return <AddOnCard title="Larger storage" monthlyPrice={2} description="Extra 1TB of cloud save" />
}

function CustomizableProfile() {
    return <AddOnCard title="Customizable Profile" monthlyPrice={2} description="Custom theme on your profile"/>
}

function labelStyles(isChecked: boolean) {
    return {
        //padding: '20px',
        border: '1px solid ' + (isChecked ? '#483EFF' : '#D6D9E6'),
        borderRadius: '8px',
        marginBottom: '16px',
        backgroundColor: '#F8F9FF'
    };
}

export default function PickAddOns() {
    const { onlineService, largerStorage, customizableProfile } = useSelector((state: ReduxState) => state.addOns);
    const dispatch = useDispatch();
    const checkBoxStyles = {
        '&.Mui-checked': {
            color: '#483EFF'
        },
    };
    return (<Box>
        <Typography variant="h1">Pick add-ons</Typography>
        <Typography variant="subtitle1">Add-ons help enhance your gaming experience.</Typography>
        <FormControl sx={{ padding: '5px' }}>
            <FormControlLabel sx={labelStyles(onlineService)} control={<Checkbox checked={onlineService} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setOnlineService(checked))} />} label={<OnlineServiceLabel />} />
            <FormControlLabel sx={labelStyles(largerStorage)} control={<Checkbox checked={largerStorage} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setLargerStorage(checked))} />} label={<LargerStorageLabel />} />
            <FormControlLabel sx={labelStyles(customizableProfile)} control={<Checkbox checked={customizableProfile} sx={checkBoxStyles} onChange={(e, checked) => dispatch(setCustomizableProfile(checked))} />} label={<CustomizableProfile />} />
        </FormControl>
    </Box>);
}