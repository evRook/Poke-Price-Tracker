import React from 'react';
import './Header.css'

export default function Header() {
    return ( 
        <div className="header--container">
            <img src={require('./img/pngegg.png')} alt="" className="header--img" />
            <p className="header--title">Poke Price Tracker</p>
        </div>
     );
}
