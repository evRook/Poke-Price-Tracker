import React from 'react';
import './Slider.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider({next, prev, img, name, rarity, set, number, setNumber, low, mid, high, market}) {
    return ( 
        <div className="slider--container">
            <div className="slider--button" onClick={prev}>{<IoIosArrowBack />}</div>
            <div className="slider--content">
                <div className="slider--img__container">
                    <img src={img} alt="" />
                </div>
                <div className="slider--card--content">
                    <div className="slider--text__container">
                        <p className="slider--set">{set}</p>
                        <p className="slider--rarity">{rarity} - #{`${number}/${setNumber}`}</p>
                        <p className="slider--name">{name} </p>
                    </div>
                    <div className="slider--price__container">
                        <div className="slider--price--subContainer">
                            <p className="slider--price--title">Low:</p>
                            <p className="slider--price--value">${low}</p>
                        </div>
                        <div className="slider--price--subContainer">
                            <p className="slider--price--title">Mid:</p>
                            <p className="slider--price--value">${mid}</p>
                        </div>
                        <div className="slider--price--subContainer">
                            <p className="slider--price--title">High:</p>
                            <p className="slider--price--value">${high}</p>
                        </div>
                        <div className="slider--price--subContainer">
                            <p className="slider--price--title">Market:</p>
                            <p className="slider--price--value">${market}</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="slider--button" onClick={next}>{<IoIosArrowForward />}</div>
        </div>
     );
}
