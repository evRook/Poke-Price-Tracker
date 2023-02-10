import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom'

export default function Home() {
    let pokeArr = []

    const homeData = useLoaderData()

    // homeData.data.map(({images, id }) => {
    //     return(
    //         pokeArr.push(
    //             <div key={id}>
    //                 <img src={images.small} alt="" />
    //             </div>
    //         )
    //     )
    // })

    console.log(homeData.data)

    return ( 
        <div className="home--container">
            {pokeArr}
        </div>
     );
}

