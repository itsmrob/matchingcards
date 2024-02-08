import React, { useState } from 'react'
import { CardValues } from '../../types';
import Card from '../Card/Card';

import './Board.css'


interface BoardProps {
    cards: CardValues[],
    onPlay: (i: CardValues[]) => void;
}

const Board: React.FC<BoardProps> = ({ cards, onPlay }) => {
    //Si el parid de la primera imagen es igual que la segunda, mutar ambos objetos a true
    //Si el pairId de la priemra es diferente, dejarlo como estaba y setear flipped false

    const [selectedCards, setSelectedCards] = useState<CardValues[]>([]);



    const validateCards = (card1: CardValues, card2: CardValues) => {
        let updatedCards;
        if (card1.pairId === card2.pairId) {
            // Si las cartas hacen match, marcamos ambas como encontradas
            updatedCards = cards.map(card => {
                if (card.id === card1.id || card.id === card2.id) {
                    return { ...card, found: true };
                }
                return card;
            });
        } else {
            // Si no hacen match, volteamos ambas cartas de nuevo después de un breve retraso para permitir que el usuario vea la segunda carta
            setTimeout(() => {
                updatedCards = cards.map(card => {
                    if (card.id === card1.id || card.id === card2.id) {
                        return { ...card, flipped: false };
                    }
                    return card;
                });
                onPlay(updatedCards); // Actualizamos las cartas en la UI después del retraso
            }, 1000);
            return; // Salimos temprano para no ejecutar onPlay inmediatamente
        }

        // Actualizamos el estado de las cartas en la UI
        onPlay(updatedCards);
        // Reseteamos las cartas seleccionadas después de validar
        setSelectedCards([]);
    }

    const handleClick = (selectedCard: CardValues) => {
        const updatedCards = cards.map((card) => {
            if (card.id === selectedCard.id) {
                return { ...card, flipped: true };
            }
            return card;
        });
        onPlay(updatedCards);

        setSelectedCards(prevSelected => {
            const newSelected = prevSelected.length < 2 ? [...prevSelected, selectedCard] : prevSelected;
            if (newSelected.length === 2) {
                validateCards(newSelected[0], newSelected[1]);
            }
            return newSelected;
        });
    };



    return (
        <div className='game-board' >
            {cards.map((card) => (
                <Card key={card.id} card={card} onCardClick={handleClick} />
            ))}
        </div>
    )

}


export default Board;
