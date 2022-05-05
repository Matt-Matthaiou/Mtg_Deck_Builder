import React, {useState} from "react";


const Card = ({mtg, index, addCard})=>
{
    const altText = `Mana cost: ${mtg.manaCost} Description: ${mtg.text}`;
    
    
    const [imgClass, setImageClass] = useState('card')
    const handleLoad = ()=>
    {
       setImageClass('card-image')
    }

    const handleClick = ()=>
    {
        addCard(mtg.id)
       
       
    }

    return(
        <div class='card'>
            <h3 style={{color: "white"}}>{index+1}: {mtg.name}</h3>
            <img class={imgClass} src={mtg.imageUrl} alt={altText} onLoad={handleLoad} onClick={handleClick} />
            
        </div>
    )
}

export default Card