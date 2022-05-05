import { getQueriesForElement } from '@testing-library/dom'
import React, {useState} from 'react'
import Modal from 'react-modal'
import UserCard from './UserCard'


const UserDeck = ({userDeck, removeCard, clearUserDeck})=>
{

   const deck = userDeck.map((card, index)=>
    {
        return <UserCard card={card} key={index} index={index} removeCard={removeCard}/>
    })

    const deckLength = userDeck.reduce((partialSum, number)=> partialSum + number.number, 0)
    
    const handleClear = ()=>
    {
        clearUserDeck();
    }

    return (
        <div class='user-deck'>
            <button onClick={handleClear}>Clear</button>
            <h2>Your deck {deckLength}/60</h2>
            <ul class='user-list'>
                {deck}
            </ul>
            
        </div>
    )
}

export default UserDeck;