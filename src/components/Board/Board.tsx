import { CardValues } from '../../types';
import React from 'react'
import Card from '../Card/Card';

import './Board.css'


interface BoardProps {
    cards: CardValues[],
    onPlay: (i: CardValues[]) => void;
}

const Board: React.FC<BoardProps> = ({ cards, onPlay }) => {
    const handleClick = (cardId: number) => {
        const newCards = cards.map((card) => {
            if (card.id === cardId) {
                return { ...card, flipped: !card.flipped }
            }
            return card;
        });
        onPlay(newCards)
    }
    return (
        <div className='game-board' >
            {cards.map((card) => (
                <Card key={card.id} card={card} onCardClick={handleClick} />
            ))}
        </div>
    )

}


export default Board;
