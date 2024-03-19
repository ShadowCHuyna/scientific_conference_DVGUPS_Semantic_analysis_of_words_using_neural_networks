import { Box, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { SearchResult } from '../../../utils/SearchResult';


export default function SearchListItem(value: SearchResult) {
    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                {value.label}
                <IconButton
                    href={value.url}
                >
                    <FileDownloadIcon />
                </IconButton>
            </Typography>

            <Typography variant="body2" gutterBottom>
                {value.data}
            </Typography>

        </Box>
    );
}