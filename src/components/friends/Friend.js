import React, { useState } from 'react';
import fakedata from '../../fakedata/fakedata.json'
import FriendDetails from '../friendDetails/FriendDetails';
import FriendList from '../friendlist/FriendList';
import './friend.css'

const Friend = () => {
    const allData = fakedata
    const [list, setList] = useState([])

    const personDetails = (person) => {
        console.log('added', person)

        let newList = [...list, person]
        setList(newList)
    }

    return (
        <div>
            <h1>all of my friend list</h1>
        <div className='friend'>
            
            <div className="friendContainer">
            {
                allData.map(data => <FriendList datas={data} addDetails= {personDetails}></FriendList>)
            }
            </div>

            <div>
                <FriendDetails data={list}></FriendDetails>
                
            </div>
        </div>
        </div>
    );
};

export default Friend;