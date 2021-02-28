import React from 'react';

const FriendDetails = (props) => {
    let details = props.data
    let total = 0
    for(let i = 0; i < details.length; i++) {
        total += parseFloat(details[i].sallary)
    }
    return (
        <div>
            <h1>add person: {details.length}</h1>
            <h4>total: {total}</h4>
        </div>
    );
};

export default FriendDetails;