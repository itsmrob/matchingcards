import React, { useState } from 'react'
import Board from '../Board/Board';
import GameControls from '../Controls/GameControls';
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

    const [score, setScore] = useState(0);

    function handleScore(score: number) {
        setScore(prevScore => prevScore + 1);
    }

    function handleControls(status: string) {
        console.log(status)
    }

    return (
        <div>
            <h1>Matching Cards </h1>
            <h3>{`Total Score: ${score}`}</h3>
            <div className="game-container">
                <Board cards={shuffledCards} gameScore={handleScore} />
                <GameControls gameStatus={handleControls}/>
            </div>
        </div>
    )
}

export default Game;
