import React from "react";
import Card from "./Card";
import Background from '../pictures/background.mp4'

const CardList = ({cards, addCard})=>
{

    const listOfCards = cards.map((mtg, index) =>
        {
            return(
                <Card mtg={mtg} key={index} index={index} addCard={addCard}/>
            );
        })

    return (
        <>
       
        <div class='card-container'>
        {/* <video id="background-video" autoPlay loop muted >
            <source src={Background} type="video/mp4"/>
        </video> */}
            {listOfCards}
        </div>
        </>
    )
}

export default CardList