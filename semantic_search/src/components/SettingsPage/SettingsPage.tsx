import { AppBar, Box, Button, CircularProgress, CircularProgressProps, FormControl, IconButton, InputLabel, Stack, TextField, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import AppBarSettingsPage from './AppBar/AppBarSettingsPage';
import AddressSettings from './Settings/AddressSettings';
import ModelSettings from './Settings/ModelSettings';



export default function SettingsPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <AppBarSettingsPage />

      <AddressSettings />
      <ModelSettings />

      <Box>
        <Button variant="contained" sx={{ marginLeft: 90 }}>Применить</Button>
      </Box>
    </Box>
  );

}