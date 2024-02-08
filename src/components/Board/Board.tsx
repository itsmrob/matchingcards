import React from 'react'
import { CardValues } from '../../types';
import Card from '../Card/Card';


interface BoardProps {
    cards: CardValues[],
    onPlay: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ cards }) => {

    return (
        <div className='game-board' >
            {cards.map((card) => (
                <Card key={card.id}/>
            ))}
        </div>
    )

}


export default Board;
