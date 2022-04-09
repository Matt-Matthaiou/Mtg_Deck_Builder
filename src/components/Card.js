import React, {useState} from "react";
import EditionOption from "./EditionOption";

const Card = ({mtg, index})=>
{
    const altText = `Mana cost: ${mtg.manaCost} Description: ${mtg.text}`;
    
    const [imgClass, setImageClass] = useState('card')
    const handleLoad = ()=>
    {
       setImageClass('card-image')
    }

    return(
        <div class='card'>
            <h3>{index+1}: {mtg.name}</h3>
            <img class={imgClass} src={mtg.imageUrl} alt={altText} onLoad={handleLoad}/>
        </div>
    )
}

export default Card