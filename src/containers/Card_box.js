
import React, {useState, useEffect} from "react";
import CardList from "../components/Card_list";
import CardFilter from "../components/CardFilter";
import UserDeck from '../components/UserDeck'


const CardBox = ()=>
{
    const [updatedCards, setUpdatedCards] = useState([])
    const [sets, setSets] = useState([])
    const [cards, setCards] = useState([])
    const [edition, setEdition] = useState('ZEN')
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
        const urls = ['https://api.magicthegathering.io/v1/sets?type=expansion', 'https://api.magicthegathering.io/v1/sets?type=core']
        const promises = urls.map(url =>fetch(url));
        Promise.all(promises)
        .then(re => Promise.all(re.map(res => res.json())))
        .then((result)=>
            {
                const temp = result[0].sets
                result[1].sets.map(set=> temp.push(set))
                setSets(temp)
            } )
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
        

        if (userInput === '' && rarity === '')
        {
            setFilteredCards(cards)
        }
        else if (userInput === '')
        {
            filterbyRarity(rarity)
        }
        else if (rarity === '')
        {    
            const cardFilter = cards.filter(card => {
                return card.name.includes(userInput)})
            setFilteredCards(cardFilter)
        }
        else
        {
            const cardFilter = cards.filter(card =>
                {
                    return card.name.includes(userInput) && card.rarity === rarity
                })
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
            const cardFilter = cards.filter(card => {
                return card.rarity === rarity})
            setFilteredCards(cardFilter)
        }
    }

    const addCard = (cardId)=>
    {
        const userCards = [...userDeck]
        const findCard = cards.filter(card => 
            {
                return card.id === cardId
            })
        if (userCards.length === 0)
        {
            userCards.push({card:findCard[0], number: 1})
            setUserDeck(userCards)
        }
        else if (userCards.reduce((partialSum, number)=> partialSum + number.number, 0) === 60)
        {
            return;
        }
        else if (userCards.some(card =>card.card === findCard[0]
            ) === false)
           {
               userCards.push({card : findCard[0], number: 1})
               setUserDeck(userCards)
           }
        else if (userCards.some(card=> card.card === findCard[0]) === true)
           {
               userCards.map((card, index)=>
               {
                   if(card.card === findCard[0] && card.number < 4 || card.card === findCard[0] && card.card.supertypes[0] === "Basic")
                   {
                        userCards[index].number = card.number + 1
                       setUserDeck(userCards)
                       
                   }
               })
           }
        else
        {
            return;
        }
    }

    const removeCard = (index)=>
    {
        const cards = [...userDeck]
        if (cards[index].number === 1)
        {
            cards.splice(index, 1)
        }
        else
        {
            cards[index].number -= 1
        }
            
        setUserDeck(cards)
    }

    const clearUserDeck = ()=>
    {
        setUserDeck([]);
    }

    return(
        <div id='app'>

            <div id='page'>
                <h1>Welcome to MTG deck builder</h1>
                <CardFilter editions={sets} changeEdition={changeEdition} searchFunction={searchFunction} filterByRarity={filterbyRarity}/>
            </div>

            <div id='main-content'>
                <CardList cards={filteredCards} addCard={addCard}/>
                <UserDeck userDeck={userDeck} removeCard={removeCard} clearUserDeck={clearUserDeck}/>
            </div>
        </div>
        
    )
}

export default CardBox;