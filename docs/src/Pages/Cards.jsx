import './Cards.css'
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export default function Cards() {

    let cardSet = []
    let { setId } = useParams()

    let url = `https://api.pokemontcg.io/v2/cards?q=id:${setId}`
    
    const[pkmnData, setPkmnData] = useState()

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPkmnData(data.data)
            })
    })
      
    pkmnData.map(({images, name, id}) => {
        return(
            cardSet.push(
                <div className="card--content" key={id}>
                    <img src={images.small} alt="" />
                    <p>{name}</p>
                </div>
            )
        )
    })
    
      console.log(pkmnData)
      console.log(cardSet)
    
    

    return ( 
        <div className='card--container'>
            {cardSet}
        </div>
     );
}
