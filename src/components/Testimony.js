import React from 'react';
import "../stylesheets/testimony.css"

export default function Testimony(props) {
  return (
    <>
        <div className='testimony-container'>
            <img className='testimony-image'
                src={require(`../images/testimony_${props.image}.png`)}
                alt="Photo"
            />
            <div className="text-testimony-container">
                <p className='name-testimony'>
                <strong>{props.name}</strong> en {props.country}
                </p>
                <p className='charge-testimony'>{props.charge} 
                <strong> {props.company}</strong></p>
                <p className='text-testimony'>{props.testimony}</p>
            </div>
        </div>
    </>
  )
}
