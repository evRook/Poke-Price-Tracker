import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
    
    const homeData = useLoaderData()
    let pokeArr = []

    homeData.data.map(({images, id }) => {
        return(
            pokeArr.push(
                <div key={id}>
                    <img src={images.small} alt="" />
                </div>
            )
        )
    })

    console.log(homeData.data)

    return ( 
        <div className="home--container">
            {pokeArr}
        </div>
     );
}

