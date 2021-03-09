import React from 'react';
//import image from 'F:/reacttut/monsters/src/component/card/aaa.jpg';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2> {props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);