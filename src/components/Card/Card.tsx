import React from 'react'
import './Card.css';
import { CardValues } from '../../types';
import lockedCard from '../../assets/ventana-de-chat.png';

interface CardProps {
    card: CardValues;
    onCardClick: (cardId: CardValues) => void;
}

const Card: React.FC<CardProps> = ({ card, onCardClick }) => {
    return (
        <div className='game-card' onClick={() => onCardClick(card)}>
            <img src={card.flipped || card.found ? card.image : lockedCard} width={75} height={75} alt={card.id.toString()} />
            {/* <img src={card.image} width={75} height={75} alt={card.id.toString()} /> */}
        </div>
    )
}

export default Card