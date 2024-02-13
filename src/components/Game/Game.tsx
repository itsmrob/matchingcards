import React, { useState, useEffect } from 'react'
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


    const [cards, setCards] = useState<CardValues[]>([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCards(shuffleCards([...images]))
    }, []);

    function handleScore(score: number) {
        setScore(prevScore => prevScore + 1);
    }
    function handleStart() {
        
    }
    function handleRestart() {
        setScore(0);
        setCards(shuffleCards([...images]));
    }
    function handleShowCards() {
        const newCards = cards.map(card => ({ ...card, flipped: !card.found }));
        setCards(newCards);

        setTimeout(() => {
            const resetCards = newCards.map(card => ({ ...card, flipped: card.found }));
            setCards(resetCards);
        }, 2000); // Muestra las cartas por 2 segundos
    }


    return (
        <div>
            <h1>Matching Cards </h1>
            <h3>{`Total Score: ${score}`}</h3>
            <div className="game-container">
                <Board cards={cards} gameScore={handleScore} />
                <GameControls
                    onStart={handleStart}
                    onRestart={handleRestart}
                    onShowCards={handleShowCards}
                />
            </div>
        </div>
    )
}

export default Game;
