import React from 'react';
import { useLoaderData } from 'react-router-dom'

export default function Home() {

    const homeData = useLoaderData()
    let img = homeData.data.images.small
    console.log(homeData)

    return ( 
        <div className="home--container">
            <img src={img} alt="" />
        </div>
     );
}

