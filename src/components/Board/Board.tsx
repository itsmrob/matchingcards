import React, { useCallback, useEffect, useState } from 'react'
import { CardValues } from '../../types';
import Card from '../Card/Card';

import './Board.css'

interface BoardProps {
    cards: CardValues[],
    gameScore: (score: number) => void;
}

const Board: React.FC<BoardProps> = ({ cards, gameScore }) => {
    const [selectedCards, setSelectedCards] = useState<CardValues[]>([]);
    const [gameCards, setGameCards] = useState<CardValues[]>([...cards]);

    const updateGameBoard = useCallback((selectedCard: CardValues, isMatch?: boolean): CardValues[] => {
        const selectedCardsIds = selectedCards.map((card => card.id));
        const updatedCards = gameCards.map((card) => {
            if (isMatch && card.pairId === selectedCard.pairId) {
                return { ...card, flipped: true }
            }
            if (!isMatch) {
                return selectedCardsIds.includes(card.id) ? { ...card, flipped: false } : card;
            }
            return card;
        })
        return updatedCards;
    }, [gameCards, selectedCards]);

    useEffect(() => {
        if (selectedCards.length === 2) {
            const [card1, card2] = selectedCards;
            const isMatch = card1.pairId === card2.pairId;
            const timerId = setTimeout(() => {
                setGameCards(updateGameBoard(card1, isMatch));
                if (isMatch) {
                    gameScore(1);
                }
                setSelectedCards([]);
            }, isMatch ? 0 : 1000);
            return () => clearTimeout(timerId);
        }
    }, [selectedCards, gameCards, gameScore, updateGameBoard])

    const handleClick = (selectedCard: CardValues) => {
        if (selectedCards.length < 2) {
            const updatedCards = gameCards.map((card) => {
                if (card.id === selectedCard.id) {
                    return { ...card, flipped: true }
                }
                return card;
            });
            setGameCards(updatedCards)
            setSelectedCards(prevSelected => {
                const isSameCard = prevSelected.some(card => card.id === selectedCard.id);
                if (isSameCard) {
                    return prevSelected;
                }
                return [...prevSelected, selectedCard];
            });
        }
    }
    return (
        <div className='game-board' >
            {gameCards.map((card) => (
                <Card key={card.id} card={card} onCardClick={handleClick} />
            ))}
        </div>
    )
}
export default Board;

