import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  buttonType?: string;
  children: ReactNode;
  disabled?: boolean;
  onButtonClick: () => void;
}

const buttonColor = (buttonType: string) => {
  switch (buttonType) {
    case 'primary':
      return '#0398fc';
    case 'info':
      return '#04c745'
    case 'danger':
      return '#eb2005'
    default:
      return '#0d0d0d';
  }
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, onButtonClick, disabled = false }) => {
  return (
    <button
      className='game-controls-button'
      style={{ backgroundColor: buttonColor(buttonType || 'default') }}
      onClick={onButtonClick} disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button