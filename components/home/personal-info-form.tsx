
"use client";
import {ChangeEvent, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { FormControl, TextField, FormLabel, Typography } from '@mui/material';
import { ReduxState } from '../shared/store';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPhone } from '../shared/personalInfoSlice';
import { goToStep, resetValidation } from '../shared/navigationSlice';

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
            if (!phone) {
                setPhoneError('This field is required');
                return;
            }
            dispatch(goToStep(2));
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
            <FormControl>
                <Typography variant="h1">Personal info</Typography>
                <div>Please provide your name, email address, and phone number.</div>
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
                >
                </TextField>
            </FormControl>
        </Box>
    );
}


