import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';

import { setNumPlayer } from '../../../redux/slices/gameSlice';


export const PlayerInput = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <TextField
                    id="outlined-number"
                    placeholder='Player Count (default 4)'
                    type='number'
                    onChange={
                        e => {
                            dispatch(setNumPlayer(e.target.value));
                        }
                    }
                />

            </Box>
        </div >
    )
}
