import React from 'react';
import './friendlilst.css'

const FriendList = (props) => {
    const {name,username, img, email, address, sallary} = props.datas
    return (
        <div className='personDesign'>
            <h3>Name: {name}({username})</h3>
            <p>email: {email}</p>
            <p>address: <small>{address.street},{address.suite},{address.city}</small></p>
            <img src={img} alt=""/>
            <h5>sallary: ${sallary}</h5>
            <button onClick= {() =>props.addDetails(props.datas)}>person details</button>
        </div>
    );
};

export default FriendList;