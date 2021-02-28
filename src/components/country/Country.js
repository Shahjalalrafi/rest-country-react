import React from 'react';
import './country.css'

const Country = (props) => {

    const { name, population, area, flag } = props.countryDetails

    return (
        <div className="container">
            <div className="design textLeft">
                <h4>Country Name: {name}</h4>
                <p className="textLeft">Population: {population}</p>
                <p>Area: {area}</p>
                <img src={flag} alt="" />
                <br></br>
                <button onClick={() => props.addCountry(props.countryDetails)}>add button</button>
            </div>
        </div>
    );
};

export default Country;