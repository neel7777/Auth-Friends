import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [state, setState] = useState({
        friends:['']
    })

    const findFriends = () => {
        axiosWithAuth()
        .get('api/friends')
        .then(res=> {
            console.log(res);
            setState({friends:res.data})
        })
        .catch(err=>console.log(err));
    }
    
    return (
        

        <div>
            <h1>Friends List!</h1>
            
            {state.friends.map(each=>(
                <>
                <div key={each.id}>
             <h1>{each.name}</h1>
             <h1>{each.age}</h1>
             <h1>{each.email}</h1>
                </div>
                </>
            ))}
        </div>
            
        
    )
}

export default FriendsList;