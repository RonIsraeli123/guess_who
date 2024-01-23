import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import generateWords from '../../algorithm/generateWords'
import { setGameWords } from '../../redux/slices/gameSlice';
import { GameNavbar, PlayersTabPanel, WordsTapPanel } from './components'


export const MainPage = () => {
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);

    useEffect(() => {
        dispatch(setGameWords(generateWords(numPlayer)));
    }, [dispatch, numPlayer]);

    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0);

    return (
        <div className='ballsResult'>

            <Box sx={{ width: '100vw' }}>
                <GameNavbar setShow={setShow} />
                <PlayersTabPanel value={value} setValue={setValue} setShow={setShow} />
                <WordsTapPanel value={value} show={show} setShow={setShow} />
            </Box >
        </div>
    );
}
