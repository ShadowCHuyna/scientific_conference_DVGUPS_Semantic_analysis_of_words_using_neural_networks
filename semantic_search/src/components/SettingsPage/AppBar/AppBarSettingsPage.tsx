import * as React from 'react';
import { AppBar, Box, Button, CircularProgress, CircularProgressProps, FormControl, IconButton, InputLabel, Stack, TextField, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBarIcon from '../../icon';
import { useNavigate } from 'react-router-dom';


export default function AppBarSettingsPage() {
    const navigate = useNavigate();
  
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" aria-label="Настройки" color="inherit" onClick={()=>navigate("/", { replace: false })}>
              <ArrowBackIcon />
            </IconButton>
            <AppBarIcon txt={"Настройки"}></AppBarIcon>
          </Toolbar>
        </AppBar>
    )
}