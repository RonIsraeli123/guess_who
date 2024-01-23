import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import generateBalls from '../../algorithm/generateWords'
import { setGameVars } from '../../redux/slices/gameSlice';
import { GameNavbar, PlayersTabPanel, BallsTapPanel } from './components'


export const MainPage = () => {
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);

    useEffect(() => {
        dispatch(setGameVars(generateWords(numPlayer)));
    }, [dispatch, numPlayer]);

    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0);

    return (
        <div className='ballsResult'>

            <Box sx={{ width: '100vw' }}>
                <GameNavbar setShow={setShow} />
                <PlayersTabPanel value={value} setValue={setValue} setShow={setShow} />
                <BallsTapPanel value={value} show={show} setShow={setShow} />
            </Box >
        </div>
    );
}
