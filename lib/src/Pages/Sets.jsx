import React from 'react';
import './Sets.css'
import SetsCard from './Components/SetsCard'
import { useLoaderData, Link } from 'react-router-dom'

export default function Sets() {

    const setsData = useLoaderData()
    let setsCards = []
    console.log(setsData)

    setsData.data.map(({images, name, id}) => {
        return(
            setsCards.push(
                <Link to={`/sets/${id}`} key={id}>
                    <SetsCard img={images.logo} title={name}/>
                </Link>
            )
        )
    })

    return ( 
        <div className="sets--container">
            {setsCards}
        </div>
     );
}
