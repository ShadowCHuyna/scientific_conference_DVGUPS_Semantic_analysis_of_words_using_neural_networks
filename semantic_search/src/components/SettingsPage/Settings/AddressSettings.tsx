import { CircularProgress, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function AddressSettings() {

  return (
    <Stack direction="row" spacing={6} sx={{ margin: 3 }} alignItems="center">
      <TextField label="ip:port" variant="outlined" value={"localhost:8080"} sx={{ width: "80%" }} />

      <Typography>
        Статус
      </Typography>

      <CheckIcon color="success" />
      <CloseIcon sx={{ color: "red" }} />
      <CircularProgress size={30} />
    </Stack>
  );

}