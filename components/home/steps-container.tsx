import { useSelector } from 'react-redux';
import { ReduxState } from '@/components/shared/store';
import PersonalInfoForm from './personal-info-form';
import SelectYourPlan from './select-plan';
import PickAddOns from './pick-add-ons';
import Summary from './summary';
import ThankYou from './thank-you';

export default function StepsContainer() {
    const { step } = useSelector((state: ReduxState) => state.nav);
    return (<>
        {step == 1 && <PersonalInfoForm />}
        {step == 2 && <SelectYourPlan />}
        {step == 3 && <PickAddOns />}
        {step == 4 && <Summary />}
        {step == 5 && <ThankYou />}
    </>);
}