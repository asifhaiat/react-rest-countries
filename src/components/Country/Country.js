import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, official, capital, population, area, flags, region} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <h3>Official Name: {official}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" srcset="" />
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            
        </div>
    );
};

export default Country;