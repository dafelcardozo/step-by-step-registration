import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../shared/store";
import { goToStep } from "../shared/registrationSlice";


export default function Summary() {
    const dispatch = useDispatch();
    const { plan, is_yearly } = useSelector((state: ReduxState) => state.planInfo);
    const { customizableProfile, largerStorage, onlineService } = useSelector((state: ReduxState) => state.addOns);

    return (<Box>
        <h1>Finishing up</h1>
        <div>Double-check everything looks OK before confirming.</div>
        <div>
            <div>{plan} ({is_yearly?'Yearly':'Monthly'})</div>
            <button onClick={() => dispatch(goToStep(2))}>Change</button>
        </div>
        <div>
            {onlineService &&
            <div>
                <div>Online service</div>
                <div>+$1/mo</div>
            </div>}
            {largerStorage &&
            <div>
                <div>Larger storage</div>
                <div>+$2/mo</div>
            </div>
            }
            {customizableProfile &&
            <div>
                <div>Customizable profile</div>
                <div>+$2/mo</div>
            </div>
            }
        </div>
        <div>
            Total (per month)
            <div >(Bug total calculation)</div>
        </div>
    </Box>);
}