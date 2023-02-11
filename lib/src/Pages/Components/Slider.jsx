import React from 'react';
import './Slider.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider({next, prev, img, name, set, number, setNumber}) {
    return ( 
        <div className="slider--container">
            <div className="slider--button" onClick={prev}>{<IoIosArrowBack />}</div>
            <div className="slider--content">
                <div className="slider--img__container">
                    <img src={img} alt="" />
                </div>
                
                <p className="slider--name">{name}</p>
                <p className="slider--set">{set},{`${number}/${setNumber}`}</p>
            </div>
            <div className="slider--button" onClick={next}>{<IoIosArrowForward />}</div>
        </div>
     );
}
