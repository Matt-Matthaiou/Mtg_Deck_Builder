import React from "react";
import Card from "./Card";

const CardList = ({cards})=>
{

    const listOfCards = cards.map((mtg, index) =>
        {
            return(
                <Card mtg={mtg} key={index} index={index}/>
            );
        })

    return (
        <div class='card-container'>
            {listOfCards}
        </div>
        
    )
}

export default CardList