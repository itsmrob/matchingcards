import React, { useState } from 'react'
import Board from '../Board/Board';
import History from '../History/History';
import { images } from '../../constants/images';
import { CardValues } from '../../types';

import './Game.css'

const Game = () => {
    function shuffleCards(imagesArray: CardValues[]) {
        for (let i = imagesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]]
        }
        return imagesArray;
    }

    const shuffledCards = shuffleCards([...images]);

    const [cards, setcards] = useState(shuffledCards);

    function handlePlay(newCards: CardValues[]) {
        setcards(newCards)
    }

    return (
        <div>
            <h1>Matching Cards </h1>
            <h3>Total Score: 0</h3>
            <div className="game-container">
                <Board cards={cards} onPlay={handlePlay} />
                <History />
            </div>
        </div>
    )
}

export default Game;
