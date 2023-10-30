import { useEffect, useState, useReducer } from "react";

const INITIAL_SCORE = {
    currentScore: 0,
    highScore: 0,
}
const DEFAULT_NUMBER_OF_CARDS = 10

const reducer = (score, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return {
                ...score,
                currentScore: score.currentScore + 1,
                highScore:
                    score.highScore < score.currentScore + 1
                    ? score.currentScore + 1
                    : score.highScore,
            }
        case 'RESTART':
            return {
                ...score,
                currentScore: 0,
            }

        default:
            return score
    }
}

 // fisher-Yates Shuffle algorithm
 function shuffle(array) {
    let currentIndex = array.length,
        randomIndex
    // while there are still elements to shuffle
    while (currentIndex !== 0) {
        // pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
 }

 const useActions = () => {
    const [deckId, setDeckId] = useState(null)
    const [cards, setCards] = useState(null)
    const [selectedCards, setSelectedCards] = useState([])
    const [score, dispatch] = useReducer(reducer, INITIAL_SCORE)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isGameWon, setIsGameWon] = useState(false)


    // grab a deck ID from API
    useEffect(() => {
        const fetchDeckId = async () => {
            const response = await fetch(
                `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
            )
            const data = await response.json()
            setDeckId(data.deck_id)
        }
        fetchDeckId()
    }, [])

    const drawCards = async (deckId, numberOfCards) => {
        await fetch(
            `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`
        )
        .then((response) => response.json())
        .then((response) => {
            setCards(response.cards)
        })
        .catch((err) => console.error(err))
    }

    // whenever deckId changes, draw cards from API
    useEffect(() => {
        if (deckId !== null && deckId !== undefined) {
            drawCards(deckId, DEFAULT_NUMBER_OF_CARDS)
        }
    }, [deckId])

    function restartGame() {
        dispatch({ type: 'RESTART' })
        setSelectedCards([])
    }

    function checkWin(score) {
        // checks current score and new number of cards if is the max possible score was achieved
        if (score >= cards.length) {
            setIsGameWon(true)
            restartGame()
        }
    }

    // when a card is clicked, determine win/loss and update score
    function handleCardSelection(card) {
        if (!selectedCards.includes(card)) {
            setSelectedCards([...selectedCards, card])
            dispatch({type: 'ADD_SCORE' })
            checkWin(score.currentScore + 1)
            shuffle(cards)
        } else {
            setIsGameOver(true)
            restartGame
        }
    }

    function playAgain(numberOfCards) {
        drawCards(deckId, numberOfCards)
        setIsGameOver(false)
        setIsGameWon(false)
    }

    return {
        score,
        cards,
        handleCardSelection,
        isGameOver,
        isGameWon,
        playAgain,
    }
 }

 export { useActions }