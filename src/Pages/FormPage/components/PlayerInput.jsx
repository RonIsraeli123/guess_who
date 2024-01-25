import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Config, GameFormConfigEnglish, GameFormConfigHebrew } from '../../../config'
import { setPlayers } from '../../../redux/slices/gameSlice';


export const PlayerInput = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? GameFormConfigHebrew : GameFormConfigEnglish

    const [playerList, setPlayerList] = useState([])
    const [playerNameInput, setPlayerNameInput] = useState('')

    const handleClickAddPlayer = () => {
        if (playerNameInput === undefined || playerNameInput === '' || playerNameInput.trim === '') {
            console.log("alert!")
            alert("name is invalid!")
        }
        else if (playerList.includes(playerNameInput)) {
            alert("name already exists")
        }
        else {
            setPlayerList([...playerList, playerNameInput])
        }
    }

    const rollValidation = (players) => {
        if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
            alert(configText.PLAYERS_ALERT_MESSAGE_TEXT);
        }
        else {
            dispatch(setPlayers(playerList))
            navigate('/MainPage');
        }
    }

    return (
        <div className='form'>
            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">{languageType === 'hebrew' ? 'שחקנים' : "Players"}</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text'
                        onChange={(e) => setPlayerNameInput(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle visibility"
                                    onClick={handleClickAddPlayer}
                                    edge="end"
                                >
                                    <AddCircleOutlineIcon fontSize='large' />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className="players-chip">
                {playerList.map((playerName, index) => {
                    return <div className="player-chip" key={index}><Chip color='success' label={`${index + 1}) ${playerName}`} /></div>
                })}
            </div>
            <div className="formLinks">
                <Button onClick={() => rollValidation(playerList.length)} variant="contained" color="inherit">{configText.SHUFFLE_BUTTON}</Button>
                <Button component={Link} to={"/"} variant="contained" color="inherit">{configText.BACK_BUTTON}</Button>
            </div>
        </div >
    )
}