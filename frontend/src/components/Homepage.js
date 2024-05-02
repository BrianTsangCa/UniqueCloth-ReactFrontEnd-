import Box from '@mui/material/Box';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logo from '../Logo.png';

export default function HomePage() {
    return (<div>
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
                        <h1>Menu bar</h1>
                        < Stack spacing={2}>
                            <h1>Top sales</h1>
                            <h1>New sales</h1>
                        </Stack>
                    </Box>
                </Container>
            </React.Fragment>
    </div>);
}