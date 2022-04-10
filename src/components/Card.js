import React, {useState} from "react";
import EditionOption from "./EditionOption";

const Card = ({mtg, index, addCard})=>
{
    const altText = `Mana cost: ${mtg.manaCost} Description: ${mtg.text}`;
    
    const [timesAdded, setTimesAdded] = useState(0)
    const [imgClass, setImageClass] = useState('card')
    const handleLoad = ()=>
    {
       setImageClass('card-image')
    }

    const handleClick = ()=>
    {
        addCard(mtg.id)
        if (timesAdded < 4)
        {
            setTimesAdded(timesAdded + 1)
        }
    }

    return(
        <div class='card'>
            <h3>{index+1}: {mtg.name}</h3>
            <img class={imgClass} src={mtg.imageUrl} alt={altText} onLoad={handleLoad} />
            <button onClick={handleClick}>Add</button><span>{timesAdded}</span>
        </div>
    )
}

export default Card