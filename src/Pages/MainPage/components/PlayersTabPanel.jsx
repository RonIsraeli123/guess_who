import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import { useSelector } from 'react-redux';


const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PlayersTabPanel = (props) => {
  const players = useSelector((state) => state.game.gameData['players']);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
    props.setShow(false)
  };
  return (
    <div className='playerTabs'>
      <Tabs value={props.value} onChange={handleChange}>
        {
          players.map((item, index) => {
            return <Tab key={index} label={`${index + 1}) ${item}`} {...a11yProps(index)} />
          })
        }
      </Tabs>
    </div>)
}