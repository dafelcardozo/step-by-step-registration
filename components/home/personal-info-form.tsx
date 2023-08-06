
"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, TextField, FormLabel, Typography } from '@mui/material';

export default function PersonalInfoForm() {
    const [name, setName] = React.useState('');
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                    variant='outlined'
                    placeholder='e.g. Stephen King'
                />
                <FormLabel>Email address</FormLabel>
                <TextField
                    placeholder='e.g. stephenking@lorem.com'
                />
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    placeholder="e.g +1 234 567 890"
                >
                </TextField>
            </FormControl>
        </Box>
    );
}


