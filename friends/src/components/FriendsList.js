import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
// import UpdateFriend from './components/UpdateFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {

    }, [friends])

    axiosWithAuth() 
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))

    return (
        <div>
            {friends.map((item) => (
                
                <div className='friends-list' id={item.id}>
                    <div className='id-isolated'>
                        <h3>{item.id}</h3>
                    </div>
                    <div className='friend-info'>
                        <h3>{item.name}</h3>
                        <h3>{item.age}</h3>
                        <h3>{item.email}</h3>
                    </div>
                </div>
            ))}
            <AddFriend setFriends={setFriends}/>

        </div>
    );
}

export default FriendsList;