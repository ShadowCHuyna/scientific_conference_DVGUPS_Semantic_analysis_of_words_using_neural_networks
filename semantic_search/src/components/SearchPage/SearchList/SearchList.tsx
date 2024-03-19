import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchListItem from './item';
import { SearchResult } from '../../../utils/SearchResult';
import { useUnit } from 'effector-react';
import { $answer } from '../../../models/app';


// const arrRes: Array<SearchResult> = [
//     {
//         url: "https://lk.dvgups.ru/public/upload/library/typography/1997-1999/Anisimov_V.A.Vasiljev_A.S.Izuchenie_ustrojstva_i_vypolnenie_poverok_geodezicheskih_priborov._Uchebnoe_posobie.docx",
//         data: "что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то что-то",
//         label: "Anisimov_V.A.Vasiljev_A.S.Izuchenie_ustrojstva_i_vypolnenie_poverok_geodezicheskih_priborov._Uchebnoe_posobie",
//         id: 0
//     }
// ]


export default function SearchList() {

    const answer = useUnit($answer);

    return (
        <List sx={{ width: '100%' }}>
            {answer.map((value) => (
                <ListItem
                    key={value.id}
                    disableGutters
                    sx={{ padding: 3 }}>
                    <SearchListItem url={value.url} data={value.data} label={value.label} id={value.id}></SearchListItem>
                </ListItem>
            ))}
        </List>
    );
}