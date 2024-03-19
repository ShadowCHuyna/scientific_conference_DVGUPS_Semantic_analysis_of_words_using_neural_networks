import { Input, Slider, Stack, Typography } from '@mui/material';
import * as React from 'react';
import {createStore, combine, createEvent} from 'effector'

import {useUnit} from 'effector-react'
import { $k, setK } from '../../../models/app';


export default function SelectK() {

    const k = useUnit($k);
    
    return (
        <Stack direction="row" spacing={2}>
            <Typography>
                K
            </Typography>
            <Slider sx={{ width: 250 }}
                max={100}
                min={0}
                valueLabelDisplay="auto"
                //@ts-ignore
                onChange={(e)=>setK(e.target.value)}
                value={k}
            />
            <Input
                sx={{ width: 50 }}
                value={k}
                //@ts-ignore
                onChange={(e)=>setK(e.target.valueAsNumber)
                }
                inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: 'number'
                }}
            />
        </Stack>
    );
}