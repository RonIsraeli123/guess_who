import React from 'react'

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Config, GameFormConfigEnglish, GameFormConfigHebrew } from '../../../config'

import Button from '@mui/material/Button';
export const RouteButtons = () => {
    const navigate = useNavigate();
    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);

    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? GameFormConfigHebrew : GameFormConfigEnglish

    const rollValidation = (players) => {
        if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
            alert(configText.PLAYERS_ALERT_MESSAGE_TEXT);
        }
        else {
            navigate('/MainPage');
        }
    }

    return (
        <div className="formLinks">
            <Button onClick={() => rollValidation(numPlayer)} variant="contained" color="inherit">{configText.SHUFFLE_BUTTON}</Button>
            <Button component={Link} to={"/"} variant="contained" color="inherit">{configText.BACK_BUTTON}</Button>
        </div>
    )
}
