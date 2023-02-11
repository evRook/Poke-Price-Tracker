import React from 'react';
import './Home.css'
import Slider from './Components/Slider'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {


    const base1Data = useLoaderData()
    let base1Arr = []

    base1Data.data.map(({images, name, set, number, rarity, flavorText, tcgplayer }) => {
        if(rarity === "Rare Holo"){
            return(
                base1Arr.push(
                    {
                        images,
                        name,
                        set,
                        number,
                        flavorText,
                        tcgplayer,
                    }
                )
            )
        }
    })

    let [counter, setCounter] = useState(0)
    let [visableCard, setVisableCard] = useState(base1Arr[counter])
    
    const nextCard = () => {
        if(counter < base1Arr.length - 1){
            setCounter(counter = counter + 1)
            setVisableCard(base1Arr[counter])
        }else{
            setCounter(counter = 0)
            setVisableCard(base1Arr[counter])
        }
    }

    const prevCard = () => {
        if(counter > 0){
            setCounter(counter = counter - 1)
            setVisableCard(base1Arr[counter])
        }else{
            setCounter(counter = base1Arr.length - 1)
            setVisableCard(base1Arr[counter])
        }
    }

    return ( 
        <div className="home--container">
            <Slider 
                next={nextCard}
                prev={prevCard}
                img={visableCard.images.small} 
                name={visableCard.name} 
                set={visableCard.set.name}
                number={visableCard.number}
                setNumber={visableCard.set.total}
            />
        </div>
     );
}

