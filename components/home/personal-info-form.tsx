
"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, TextField, FormLabel, Typography } from '@mui/material';
import { ReduxState } from '../shared/store';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPhone } from '../shared/personalInfoSlice';

export default function PersonalInfoForm() {
    const { email, name, phone } = useSelector((state: ReduxState) => state.personalInfo);
    const dispatch = useDispatch();
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setName(event.target.value)) }
                    variant='outlined'
                    placeholder='e.g. Stephen King'
                    size="small"
                />
                <FormLabel>Email address</FormLabel>
                <TextField
                    value={email}
                    size="small"
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setEmail(event.target.value)) }
                />
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    value={phone}
                    size="small"
                    placeholder="e.g +1 234 567 890"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setPhone(event.target.value)) }
                >
                </TextField>
            </FormControl>
        </Box>
    );
}


