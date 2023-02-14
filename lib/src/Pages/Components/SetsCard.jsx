import React from 'react';
import './SetsCard.css'

export default function SetsCard({title, img}) {
    return ( 
        <div className="setsCard--container">
            <img src={img} alt="" className="setsCard--img" />
            <div className="setsCard--content">
                <p className="setsCard--title">{title}</p>
            </div>
        </div>
     );
}
