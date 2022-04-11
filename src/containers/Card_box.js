
import React, {useState, useEffect} from "react";
import CardList from "../components/Card_list";
import CardFilter from "../components/CardFilter";
import UserDeck from '../components/UserDeck'


const CardBox = ()=>
{
    const [updatedCards, setUpdatedCards] = useState([])
    const [sets, setSets] = useState([])
    const [cards, setCards] = useState([])
    const [edition, setEdition] = useState('2ED')
    const [page, setPage] = useState(1)
    const [filteredCards, setFilteredCards] = useState([])
    const [userDeck, setUserDeck] = useState([])
   
    

    useEffect(()=>
    {
        getCards();
          
    },[page])

    

    useEffect(()=>
    {
        getEditions();
    },[])


    useEffect(()=>
    {
        
        setPage(1);
       
    },[edition])

    

    const getCards = ()=>
    {     
        fetch(`https://api.magicthegathering.io/v1/cards?set=${edition}&page=${page}`)
        .then(res => res.json())
        .then(resu => nextPage(resu))
        
    }
    
    const getEditions = ()=>
    {
        fetch('https://api.magicthegathering.io/v1/sets?expansion=core')
        
        .then(re => re.json())
        .then(resu => resu.sets.filter(ex=>
            {
                return ex.type === 'core' || ex.type === 'expansion'
            }))
        .then(result=> setSets(result))
        
    }

    const nextPage = (resu) =>
    {
        const newCards = updatedCards;
        resu.cards.map(card=> newCards.push(card))
        setUpdatedCards(newCards)
        if (resu.cards.length === 100)
        {
            setPage(page + 1)
        }
        else
        {
            setFilteredCards(updatedCards)
            setCards(updatedCards)
            setUpdatedCards([])
        }
       
        
    }

    const changeEdition = (edition)=>
    {
        setEdition(edition)
        
    }


    const searchFunction = (userInput, rarity)=>
    {
        if (userInput === '' || rarity === '')
        {
            setFilteredCards(cards)
        }
        else 
        {
            const cardFilter = filteredCards.filter(card => {
                return card.name.includes(userInput)})
            setFilteredCards(cardFilter)
        }
    }
    const filterbyRarity = (rarity)=>
    {
        if (rarity === '')
        {
            setFilteredCards(cards)
        }
        else
        {
            const cardFilter = filteredCards.filter(card => {
                return card.rarity === rarity})
            setFilteredCards(cardFilter)
        }
    }

    const addCard = (cardId)=>
    {
        const userCards = userDeck
        const findCard = cards.filter(card => 
            {
                return card.id === cardId
            })
        if (userCards.length === 0)
        {
            userCards.push(findCard[0])
            setUserDeck(userCards)
        }
        else if (userCards.length === 60)
        {
            return;
        }
        else if (userCards.filter(card =>
            {
                return card === findCard[0]
            }).length < 4)
            {
                userCards.push(findCard[0])
                setUserDeck(userCards)
            }
        else
        {
            return;
        }
    }

    const removeCard = (index)=>
    {
        const cards = userDeck
        cards.splice(index,1)
            
        setUserDeck(cards)
    }


    return(
        <>
            <UserDeck userDeck={userDeck} removeCard={removeCard}/>
            <h1>Welcome to MTG deck builder</h1>
            <CardFilter editions={sets} changeEdition={changeEdition} searchFunction={searchFunction} filterByRarity={filterbyRarity}/>
            <CardList cards={filteredCards} addCard={addCard}/>

        </>
        
    )
}

export default CardBox;