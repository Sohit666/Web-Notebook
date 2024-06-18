import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const alert = ({ type, message }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={type}>{message}</Alert>
        </Stack>
    );
};

export default alert;
