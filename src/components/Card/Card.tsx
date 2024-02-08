import React from 'react'
import './Card.css';
import { CardValues } from '../../types';
import lockedCard from '../../assets/ventana-de-chat.png';

interface CardProps {
    card: CardValues;
    onCardClick: (cardId: number) => void;
}

const Card: React.FC<CardProps> = ({ card, onCardClick }) => {
    return (
        <div className='game-card' onClick={() => onCardClick(card.id)}>
            <img src={card.flipped ? card.image : lockedCard} width={75} height={75} alt={card.id.toString()} />
        </div>
    )
}

export default Card