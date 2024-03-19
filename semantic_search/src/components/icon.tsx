import { Box, Typography } from '@mui/material';
import * as React from 'react';

export interface PropsAppBarIcon {
    txt: string
}

export default function AppBarIcon(props: PropsAppBarIcon) {
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
                variant="h6"
                noWrap

                component="div"
                sx={{ display: { xs: 'none', sm: 'block', } }}>
                {props.txt}
            </Typography>
        </Box>
    );
}