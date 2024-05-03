import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Header() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                <Tab label="Home" />
                <Tab label="Women" />
                <Tab label="Men" />
            </Tabs>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group">
                <IconButton aria-label="search" color="primary">
                    <SearchIcon />
                </IconButton>
                <IconButton aria-label="PermIdentity" color="primary">
                    <PermIdentityIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Favorite">
                    <FavoriteIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </ButtonGroup>
        </Box>
    );
}