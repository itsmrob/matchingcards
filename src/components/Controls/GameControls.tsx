import React, { useState } from 'react'
import Button from '../Button/Button';

import './GameControls.css'

interface GameControlsProps {
  onStart: () => void;
  onRestart: () => void;
  onShowCards: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onStart, onRestart, onShowCards }) => {
  return (
    <div className='game-controls'>
      <Button buttonType='primary' onButtonClick={onStart}>Start</Button>
      <Button buttonType='danger' onButtonClick={onRestart} >Restart</Button>
      <Button buttonType='info' onButtonClick={onShowCards}>Show cards</Button>
    </div>
  )
}

export default GameControls;