import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import generateWords from '../../algorithm/generateWords'
import { setGameWords, setOption } from '../../redux/slices/gameSlice';
import { GameNavbar, PlayersTabPanel, WordsTapPanel, RevealPlayer } from './components'


export const MainPage = () => {
    const dispatch = useDispatch();

    const players = useSelector((state) => state.game.gameData['players']);
    const languageType = useSelector((state) => state.language.languageType);

    useEffect(() => {
        const result = generateWords(players.length, languageType)
        const wordsResult = result["wordsResult"]
        const option = result["option"]
        dispatch(setGameWords(wordsResult));
        dispatch(setOption(option));
    }, [dispatch, players, languageType]);

    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0);

    return (
        <div className='ballsResult'>
            <Box sx={{ width: '100vw' }}>
                <GameNavbar setShow={setShow} />
                <PlayersTabPanel value={value} setValue={setValue} setShow={setShow} />
                <WordsTapPanel value={value} show={show} setShow={setShow} />
                <Box className='center_search_find'>
                    <RevealPlayer />
                </Box>
            </Box >
        </div>
    );
}
