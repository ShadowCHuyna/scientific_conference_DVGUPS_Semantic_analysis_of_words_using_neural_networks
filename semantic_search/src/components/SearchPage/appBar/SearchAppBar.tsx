import { AppBar, Box, Toolbar } from '@mui/material';
import * as React from 'react';
import AppBarIcon from '../../icon';
import AppBarSearch from './search';
import AppBarSearchButton from './searchButton';
import AppBarSettingsButton from './SettingsButton';


export default function SearchAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <AppBarIcon txt={"Семантический поиск"}></AppBarIcon>
                <AppBarSearch></AppBarSearch>
                
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <AppBarSearchButton></AppBarSearchButton>

                    {/* <AppBarSettingsButton></AppBarSettingsButton> */}
                </Box>
            </Toolbar>
        </AppBar>
    );

}