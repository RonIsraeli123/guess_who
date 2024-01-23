import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RefreshIcon from '@mui/icons-material/Refresh';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';


import { NavBarConfigEnglish, NavBarConfigHebrew } from '../../../config'

import { setGameWords } from '../../../redux/slices/gameSlice';
import generateWords from '../../../algorithm/generateWords'

export const GameNavbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? NavBarConfigHebrew : NavBarConfigEnglish

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);

    return (
        <div className='navbarEnd' >
            <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/Form') }}>
                {configText.GO_BACK}
                <CompareArrowsIcon />
            </Button>
            <Button className='ButtonNav' variant="outlined" onClick={() => { dispatch(setGameWords((generateWords(numPlayer)))); props.setShow(false) }}>
                {configText.RESHUFFLE}
                <RefreshIcon />
            </Button >
            <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/') }}>
                {configText.PASS_TO_RULES}
                <MenuBookIcon />
            </Button>
        </div >
    )
}
