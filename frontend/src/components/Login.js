import Box from '@mui/material/Box';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logo from '../Logo.png';


export default function Login() {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box sx={{
                        bgcolor: '#cfe8fc', height: '100vh', display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            srcSet={`${Logo}`}
                            src={`${Logo}`}
                            alt="Logo"
                            loading="lazy"
                            style={{ marginBottom: '20px' }}
                        />
                        < Stack spacing={2}>
                            <TextField required
                                id="standard-required"
                                label="Username"
                                defaultValue="TestUser"
                                variant="standard" />
                            <TextField id="standard-password-input"
                                label="Password"
                                defaultValue="abc123"
                                type="password"
                                autoComplete="current-password"
                                variant="standard" />
                            <Button variant="contained">Login</Button>
                        </Stack>
                    </Box>
                </Container>
            </React.Fragment>
        </div >
    );
}