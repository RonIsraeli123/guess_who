import React from 'react';

import { RouteButtons } from './components/RouteButtons'
import { PlayerInput } from './components/PlayerInput'


export const FormPage = () => {

    return (
        <div className="GameForm">
            <div className='form'>
                <PlayerInput />
                <RouteButtons />
            </div>
        </div>
    );
}
