import { Box, CircularProgress, CircularProgressProps, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}


export default function ModelSettings() {

    return (
        <Stack direction="row" spacing={6} sx={{ margin: 3 }} alignItems="center">
            <TextField label="Модель" variant="outlined" value={"paraphrase-multilingual-MiniLM-L12-v2"} sx={{ width: "80%" }} />

            <Typography>
                Статус
            </Typography>

            <CheckIcon color="success" />
            <CloseIcon sx={{ color: "red" }} />
            <CircularProgressWithLabel size={30} value={60} />
        </Stack>
    );

}