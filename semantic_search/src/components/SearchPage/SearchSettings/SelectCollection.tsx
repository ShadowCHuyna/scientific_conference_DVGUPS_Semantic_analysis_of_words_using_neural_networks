import { Box, CircularProgress, Container, FormControl, InputLabel, List, ListItem, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { $activeCollection, $listCollections, setActiveCollection, setListCollections } from '../../../models/app';
import { useUnit } from 'effector-react';

// const arrRes: Array<string> = ["Коллекция_0", "Коллекция_1", "Коллекция_2"]

export default function SelectCollection() {

    const activeCollection = useUnit($activeCollection);
    const listCollections = useUnit($listCollections);


    return (
        <Box>
            <Container>
                {listCollections[0] === undefined && <CircularProgress size={20} />}

                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel>Коллекция</InputLabel>
                    <Select
                        value={activeCollection}
                        //@ts-ignore
                        onChange={(e) => {
                            setActiveCollection(e.target.value)
                        }}
                        autoWidth
                        label="Коллекция">
                        {listCollections.map((value, i) => (
                            <MenuItem key={value} value={value}>{value}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Container>
        </Box>
    );
}