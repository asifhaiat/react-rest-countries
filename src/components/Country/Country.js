import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, official, capital, population, area} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <h3>Official Name: {official}</h3>
            <h4>Capital: {capital}</h4>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p></p>
        </div>
    );
};

export default Country;