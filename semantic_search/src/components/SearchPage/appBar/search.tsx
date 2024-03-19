import * as React from 'react';
import { AppBar, Box, IconButton, InputBase, Toolbar, Typography, alpha, styled } from '@mui/material';
import { useUnit } from 'effector-react';
import { $query, setQuery } from '../../../models/app';
import { MainApp } from '../../../utils/MainApp';

const Search = styled('div')(({ theme }) => ({ 
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: '100%',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));

export default function AppBarSearch() {
    const query = useUnit($query) 

    

    return (
        <Search>
            <StyledInputBase
                placeholder="Поиск"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
                onChange={(e)=>{
                    // console.log(e);
                    
                    setQuery(e.target.value)
                    
                }}
                value={query}
                
                onKeyDown={(e)=>{
                    if(e.code==="Enter") MainApp.query()
                }}
            />

        </Search>
    );
}