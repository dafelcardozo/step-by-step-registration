"use client";
import {ChangeEvent, useEffect, useState} from 'react';
import { FormControl, TextField, FormLabel, Typography, Box } from '@mui/material';
import { ReduxState } from '../shared/store';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPhone } from '../shared/personalInfoSlice';
import { goNext, resetValidation } from '../shared/navigationSlice';


export default function PersonalInfoForm() {
    const {step, is_valid_step} = useSelector((state: ReduxState) => state.nav);
    const { email, name, phone } = useSelector((state: ReduxState) => state.personalInfo);
    const dispatch = useDispatch();

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        if (step == 1 && is_valid_step === 'validating') {
            if (!name) {
                setNameError('This field is required');
                return;
            }
            if (!email) {
                setEmailError('This field is required');
                return;
            }
            if (email && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setEmailError("Email input is wrong, it should be similar to someone@somewhere.com");
                return
            }
            if (!phone) {
                setPhoneError('This field is required');
                return;
            }
            if (phone && !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
                setPhoneError("Phone input is wrong, try a format such as (123) 456-7890 123.456.7890 +31636363634 ");
                return;
            }
            dispatch(goNext(''));
        }

    }, [step, is_valid_step])
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl sx={{'.MuiOutlinedInput-root.Mui-focused fieldset': {borderColor:'#483EFF'}}}>
                <Typography variant="h1">Personal info</Typography>
                <Typography variant="subtitle1">Please provide your name, email address, and phone number.</Typography>
                <FormLabel>Name</FormLabel>
                <TextField
                    value={name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setNameError('');
                        dispatch(setName(event.target.value));
                        dispatch(resetValidation(''));
                    } }
                    variant='outlined'
                    placeholder='e.g. Stephen King'
                    size="small"
                    error={nameError !== ''}
                    helperText={nameError}
                />
                <FormLabel>Email address</FormLabel>
                <TextField
                    value={email}
                    size="small"
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setEmailError('');
                        dispatch(setEmail(event.target.value));
                        dispatch(resetValidation(''));
                    } }
                    error={emailError !== ''}
                    helperText={emailError}
                />
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    value={phone}
                    size="small"
                    placeholder="e.g +1 234 567 890"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneError('');
                        dispatch(setPhone(event.target.value));
                        dispatch(resetValidation(''));
                    }}
                    error={phoneError !== ''}
                    helperText={phoneError}
                />
            </FormControl>
        </Box>
    );
}


