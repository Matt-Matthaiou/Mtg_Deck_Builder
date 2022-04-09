
import React, {useState, useEffect} from "react";
import CardList from "../components/Card_list";
import CardFilter from "../components/CardFilter";
import PageChange from "../components/PageChange";

const CardBox = ()=>
{
    const [fetching, setFetching] = useState([])
    const [sets, setSets] = useState([])
    const [cards, setCards] = useState([])
    const [edition, setEdition] = useState('2ED')
    const [page, setPage] = useState(1)

    useEffect(()=>
    {
        getCards();
        getEditions()    
    },[page])


    useEffect(()=>
    {
        setPage(1)
       
    },[edition])

    

    const getCards = ()=>
    {       
            fetch(`https://api.magicthegathering.io/v1/cards?set=${edition}&page=${page}`)
            .then(res => res.json())
            .then(results => setCards(results.cards))    
    }
    
    const getEditions = ()=>
    {
        fetch('https://api.magicthegathering.io/v1/sets')
        .then(re => re.json())
        .then(resu => setSets(resu.sets))
    }

    const changeEdition = (edition)=>
    {
        setEdition(edition)
        
    }

    const changePage = (page)=>
    {
        setPage(page)

    }


    return(
        <>
            <CardFilter editions={sets} changeEdition={changeEdition}/>
            <h1>Card Box</h1>
            <CardList cards={cards}/>
            <PageChange page={page} array={cards.length} changePage={changePage}/>

        </>
        
    )
}

export default CardBox;