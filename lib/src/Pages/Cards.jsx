import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export default function Cards() {

    let { setId } = useParams()
    let url = `https://api.pokemontcg.io/v2/cards?q=id:${setId}`
    const[pkmnData, setPkmnData] = useState()

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setPkmnData(data.data))
      },[])
    
      console.log(pkmnData)

    return ( 
        <p>cards test</p>
     );
}
