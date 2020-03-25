import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendsList from './FriendsList';

const Friends = () => {
    const [friends, setFriends] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const handleChanges = e => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value
        });
    }

    const addFriends = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', friends)
        .then(res=>{
            console.log(res);
            setFriends([
                ...friends,{
                    name: friends.name,
                    age: friends.age,
                    email: friends.email,
                    id: friends.id
                }
            ])
            
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div>
        <h1>Add Some Friends!</h1>        
        <form onSubmit={addFriends}>
        <input type="text"
                
                value={friends.name}
                name="name"
                
                
                placeholder="name"
                onChange={handleChanges}
                
            />
            <br/>
            <br/>
            <input type="text"
                
                value={friends.age}
                name="age"
                
                
                placeholder="age"
                onChange={handleChanges}
                
            />
            <br/>
            <br/>
            <input type="text"
                
                value={friends.email}
                name="email"
                
                
                placeholder="email"
                onChange={handleChanges}
                
            />
            <br/>
            <br/>
            <button >Add a New Friend!</button>

        </form>

        <FriendsList/>
        </div>
    )
}

export default Friends;