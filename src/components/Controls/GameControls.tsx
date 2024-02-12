import React, { useState } from 'react'
import Button from '../Button/Button';

import './GameControls.css'

interface GameControlsProps {
    gameStatus: (status: string) => void;
}

const GameControls: React.FC<GameControlsProps> = ({ gameStatus }) => {
  return (
    <div className='game-controls'>
      <Button buttonType='primary' onButtonClick={() => gameStatus('start')}>Start</Button>
      <Button buttonType='danger' onButtonClick={() => gameStatus('restart')} >Restart</Button>
      <Button buttonType='info' onButtonClick={() => gameStatus('show')}>Show cards</Button>
    </div>
  )
}

export default GameControls;