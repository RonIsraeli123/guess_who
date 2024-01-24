import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ResultPageConfigEnglish, ResultPageConfigHebrew } from '../../../config'

export const RevealPlayer = () => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? ResultPageConfigHebrew : ResultPageConfigEnglish

    const gameWords = useSelector((state) => state.game.gameData['gameWords']);
    const option = useSelector((state) => state.game.gameData['option']);

    const [playerNumber, setPlayerNumber] = useState(0)

    const alertPlayerType = () => {
        if (playerNumber > gameWords.length || playerNumber < 1) {
            alert(`${playerNumber} player number invalid!`)
            return
        }
        else {
            const playerWord = gameWords[playerNumber - 1]
            if (playerWord === option["goodWord"])
                alert(`${playerNumber} => 'GOOD GUY'! \n why you killed him?!`)
            else if (playerWord === option["badWord"]) {
                alert(`${playerNumber} => 'BAD GUY'! \n good job!`)
            }
            else {
                alert(`${playerNumber} => 'NO WORD'! \n great job!`)
                alert(`'Now you can guess the good guys word's and win, do you want to guess?'`)
            }
        }
    }

    return (
        <div className='search_ball'>
            <TextField id="filled-basic" className='textField-rtl' label={configText.SEARCH_INPUT_TEXT} type='number' variant="filled" onChange={(e) => setPlayerNumber(e.target.value)} style={{ textAlign: "center !important" }} />
            <Button variant="contained" onClick={() => alertPlayerType()}>{configText.SEARCH_BUTTON_TEXT}</Button>
        </div>
    )
}
