import React from 'react';
import './Home.css'
import Slider from './Components/Slider'
import { useLoaderData } from 'react-router-dom'

export default function Home() {


    const base1Data = useLoaderData()
    let base1Arr = []

    base1Data.data.map(({images, name, flavorText, number, tcgplayer }) => {
        return(
            base1Arr.push(
                // {images},
                // flavorText,
                // number,
                // tcgplayer,
            )
        )
    })

    console.log(base1Data.data)
    console.log(base1Arr)

    return ( 
        <div className="home--container">
            <Slider />
        </div>
     );
}

