import React from 'react'
import { CardValues } from '../../types';
import Card from '../Card/Card';

import './Board.css'


interface BoardProps {
    cards: CardValues[],
    onPlay: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ cards, onPlay }) => {
    const handleClick = (cardId: number) => {

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
