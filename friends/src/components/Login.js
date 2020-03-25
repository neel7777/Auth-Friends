import React, { useState } from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const signIn = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', user)
        .then(res=>{
            console.log(res);
            window.localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        
        <div>
            <h1>Login Page</h1>
            <form onSubmit={signIn}>               
                <br>
                </br>
            <input type="text"                
                name="username"  
                placeholder="username" 
                value={user.username}
                onChange={handleChanges}              
                
            />
            <br>
            </br>
            
            
            <input type="text"                
                name="password"               
                placeholder="password"
                value={user.password}
                onChange={handleChanges}     
                
            />
            <br>
            </br>
            <button>Login!</button>
            </form>
        </div>
    )
}



export default Login;