import React from 'react';
import EditionOption from './EditionOption';

const CardFilter = ({editions, changeEdition})=>
{

    const selectEdition = editions.map((edition, index)=>
    {
       
       return(
            <EditionOption edition={edition} />
       );
    })

    const handleSelect = (event)=>
    {
        changeEdition(event.target.value)
    }

    return(
        <select onChange={handleSelect}>
            {selectEdition}
        </select>
    )
}

export default CardFilter