import React from 'react';
import './Home.css'
import Slider from './Components/Slider'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {


    const rocketData = useLoaderData()
    let rocketArr = []

    rocketData.data.map(({images, name, set, number, rarity, flavorText, tcgplayer }) => {
        if(rarity === "Rare Holo"){
            return(
                rocketArr.push(
                    {
                     images,
                     name,
                     set,
                     number,
                     rarity,
                     flavorText,
                     tcgplayer,
                    }
                )
            )
        }
    })

    let [counter, setCounter] = useState(0)
    let [visableCard, setVisableCard] = useState(rocketArr[counter])
    
    const nextCard = () => {
        if(counter < rocketArr.length - 1){
            setCounter(counter = counter + 1)
            setVisableCard(rocketArr[counter])
        }else{
            setCounter(counter = 0)
            setVisableCard(rocketArr[counter])
        }
    }

    const prevCard = () => {
        if(counter > 0){
            setCounter(counter = counter - 1)
            setVisableCard(rocketArr[counter])
        }else{
            setCounter(counter = rocketArr.length - 1)
            setVisableCard(rocketArr[counter])
        }
    }

    console.log(visableCard)

    return ( 
        <div className="home--container">
            <Slider 
                next={nextCard}
                prev={prevCard}
                img={visableCard.images.small} 
                name={visableCard.name} 
                rarity={visableCard.rarity}
                set={visableCard.set.name}
                number={visableCard.number}
                setNumber={visableCard.set.total}
                low={visableCard.tcgplayer.prices["1stEditionHolofoil"].low.toFixed(2)}
                mid={visableCard.tcgplayer.prices["1stEditionHolofoil"].mid.toFixed(2)}
                high={visableCard.tcgplayer.prices["1stEditionHolofoil"].high.toFixed(2)}
                market={visableCard.tcgplayer.prices["1stEditionHolofoil"].market.toFixed(2)}
            />
        </div>
     );
}

