import React, {useState} from 'react';
import EditionOption from './EditionOption';

const CardFilter = ({editions, changeEdition, searchFunction, filterByRarity})=>
{
    const [userInput, setUserInput] = useState('')

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

    const handleUserInput = (event)=>
    {
        setUserInput(event.target.value)
        searchFunction(event.target.value)
    }

    const handleRarity = (event)=>
    {
        filterByRarity(event.target.value)
    }

    return(
        <div>
            <label>Select edition </label>
            <select id='edition-select' onChange={handleSelect}>
                {selectEdition}
            </select>
            
                <label>Search</label>
                <input id='search-bar' value={userInput} type='text' name='search' onChange={handleUserInput}></input>
                <label>Sort by rarity:</label>
                <select id='select-rarity' name='rarity' onChange={handleRarity}>
                    <option value=''>All</option>
                    <option value='Common'>Common</option>
                    <option value='Uncommon'>Uncommon</option>
                    <option value='Rare'>Rare</option>
                    <option value='Mythic'>Mythic</option>
            </select>
           
        </div>
       
    )
}

export default CardFilter