import { IconButton } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MainApp } from '../../../utils/MainApp';

export default function AppBarSearchButton() {
    return (
        <IconButton size="large" aria-label="Настройки" color="inherit" onClick={(e)=>MainApp.query()}>
            <SearchIcon />
        </IconButton>
    );
}