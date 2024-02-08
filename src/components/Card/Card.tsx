import React from 'react'
import './Card.css';
import { CardValues } from '../../types';

interface CardProps {
    card: CardValues;
    onCardClick: (cardId: number) => void;
}

const Card: React.FC<CardProps> = ({ card, onCardClick }) => {
    return (
        <div className='game-card'>
            <img src={card.image} width={75} height={75} alt={card.id.toString()} />
        </div>
    )
}

export default Card