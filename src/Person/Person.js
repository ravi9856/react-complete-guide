import React from 'react';
import './Person.css';

//2 Ways to provide CSS, one is to use Person.css, import and use 
// 2nd is Inline way
const person = (props) => {
    return (
        <div className="Person ">
         <p onClick={props.click}>I'm {props.name}, age {props.age} My ID is {Math.floor(Math.random()*50)}</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value = {props.name} />
        </div>
     )
};

export default person;