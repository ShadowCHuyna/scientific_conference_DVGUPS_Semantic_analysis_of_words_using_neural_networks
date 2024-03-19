import { Box, CircularProgress, Container } from '@mui/material';
import * as React from 'react';
import SearchAppBar from './appBar/SearchAppBar';
import SearchSettings from './SearchSettings/SearchSettings';
import SearchList from './SearchList/SearchList';
import { useUnit } from 'effector-react';
import { $answerStatus } from '../../models/app';


export default function SearchPage() {
    const status = useUnit($answerStatus);

    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <SearchAppBar></SearchAppBar>
            <SearchSettings></SearchSettings>
            <hr />
            <Container>
            {status==="ok" && <SearchList />}
            {status==="load" &&
            <CircularProgress size={100} sx={{
                position: "absolute",
                top: "50%",
                left: "50%"
            }} />}
            </Container>
        </Box>
    );
}