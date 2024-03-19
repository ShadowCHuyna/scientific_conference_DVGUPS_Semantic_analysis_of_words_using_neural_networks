import { IconButton } from '@mui/material';
import * as React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

export default function AppBarSettingsButton() {
    const navigate = useNavigate();
    return (
        <IconButton size="large" aria-label="Настройки" color="inherit" onClick={()=>navigate("SettingsPage", { replace: false })}>
            <SettingsIcon />
        </IconButton>
    );
}