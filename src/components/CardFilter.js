import React, {useState} from 'react';
import EditionOption from './EditionOption';

const CardFilter = ({editions, changeEdition, searchFunction, filterByRarity})=>
{
    const [userInput, setUserInput] = useState('')
    const [rarity, setRarity] = useState('')

    const selectEdition = editions.map((edition, index)=>
    {
       
       return(
            <EditionOption edition={edition} key={index}/>
       );
    })

    const handleSelect = (event)=>
    {
        changeEdition(event.target.value)
        setUserInput('')
        setRarity('')
    }

    const handleUserInput = (event)=>
    {
        setUserInput(event.target.value)
        searchFunction(event.target.value, rarity)
    }

    const handleRarity = (event)=>
    {
        filterByRarity(event.target.value)
        setRarity(event.target.value)
        setUserInput('')
    }

    const selectedCond = (rarity === '') ? 'selected' : '';

    return(
        <div>
            <label className='label'>Select edition </label>
            <select id='edition-select' onChange={handleSelect}>
                {selectEdition}
            </select>
            
                <label className='label'>Search</label>
                <input id='search-bar' value={userInput} type='text' name='search' onChange={handleUserInput}></input>
                <label className='label'>Sort by rarity:</label>
                <select id='select-rarity' name='rarity' onChange={handleRarity}>
                    <option value='' selected={selectedCond}>All</option>
                    <option value='Common'>Common</option>
                    <option value='Uncommon'>Uncommon</option>
                    <option value='Rare'>Rare</option>
                    <option value='Mythic'>Mythic</option>
            </select>
           
        </div>
       
    )
}

export default CardFilter