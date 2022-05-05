import React from 'react'


const UserCard = ({card, removeCard, index})=>
{
    

    const handleClick = ()=>
    {
        removeCard(index)
    }

   return(
   <li className='user-card'>   
        <button id='button-card' onClick={handleClick}><b>{card.number}X  </b>{card.card.name}</button>   
        <img src={card.card.imageUrl} id='hidden-pic'></img>
    </li>
    )
}

export default UserCard 