
"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PersonalInfoForm() {
    const [name, setName] = React.useState('');
    return (
        <>
            <div>Personal Info</div>
            <div>Please provide your name, email address, and phone number.</div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                        placeholder='e.g. Stephen King'
                    />
                    <TextField
                        label="Email address"
                        placeholder='e.g. stephenking@lorem.com'
                    />
                    <TextField
                        label="Phone Number"
                        placeholder="e.g +1 234 567 890"                        
                    >
                    </TextField>
                </div>

            </Box>
        </>
    );
}


