import React from 'react'


const UserCard = ({card, removeCard, index})=>
{

    const handleClick = ()=>
    {
        removeCard(index)
    }

   return(
   <li>
        <span>{card.name}</span><button onClick={handleClick}>&#10060;</button>
    </li>
    )
}

export default UserCard 