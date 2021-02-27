// import React from 'react';

// const Country = (props) => {
//     const {name,population,flag} = props.CountryDetails
//     const styled = {
//         border: '2px solid red',
//         margin: '3px'
//     }

//     const add = props.addCountry
//     return (
//         <div style={styled}>
//             <h4>{name}</h4>
//             <p>population: {population}</p>
//             <img style={{width: "100px"}} src={flag} alt=''></img><br></br>
//             <button onClick={() => add(props.CountryDetails)}>add country</button>
//         </div>
//     );
// };

// export default Country;

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