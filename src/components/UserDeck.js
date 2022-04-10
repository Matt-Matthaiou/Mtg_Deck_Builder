import React from 'react'
import UserCard from './UserCard'

const UserDeck = ({userDeck})=>
{
    
   const deck = userDeck.map((card, index)=>
    {
        return <UserCard card={card} key={index}/>
    })
    

    return (
        <>
            <h2>Your deck</h2>
            <span>{userDeck.length}/60</span>
            <ul>
                {deck}
            </ul>
        </>
    )
}

export default UserDeck;