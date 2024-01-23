import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import { useSelector } from 'react-redux';

import { ResultPageConfigEnglish, ResultPageConfigHebrew } from '../../../config'


const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PlayersTabPanel = (props) => {
  const languageType = useSelector((state) => state.language.languageType);

  const configText = languageType === "hebrew" ? ResultPageConfigHebrew : ResultPageConfigEnglish

  const gameWords = useSelector((state) => state.game.gameData['gameWords']);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
    props.setShow(false)
  };
  return (
    <div className='playerTabs'>
      <Tabs value={props.value} onChange={handleChange}>
        {
          gameWords.map((item, index) => {
            return <Tab key={index} label={`${configText.PLAYER_TITLE} ${index + 1} `} {...a11yProps(index)} />
          })
        }
      </Tabs>
    </div>)
}