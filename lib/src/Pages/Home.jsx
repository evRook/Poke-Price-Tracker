import React from 'react';
import './Home.css'
import Slider from './Components/Slider'
import { useLoaderData } from 'react-router-dom'

export default function Home() {


    const base1Data = useLoaderData()
    let base1Arr = []

    base1Data.data.map(({images, name, set, number, tcgplayer }) => {
        return(
            base1Arr.push(
                {
                 images,
                 name,
                 set,
                 number,
                 tcgplayer,
                }
            )
        )
    })

    console.log(base1Data.data)
    // console.log(base1Arr)

    return ( 
        <div className="home--container">
            <Slider 
                img={base1Arr[0].images.small} 
                name={base1Arr[0].name} 
                set={base1Arr[0].set.name}
                number={base1Arr[0].number}
                setNumber={base1Arr[0].set.total}
            />
        </div>
     );
}

