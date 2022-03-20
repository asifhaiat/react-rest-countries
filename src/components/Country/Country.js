import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <h3>Official Name: {props.official}</h3>
            <h4>Capital: {props.capital}</h4>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
            <p></p>
        </div>
    );
};

export default Country;