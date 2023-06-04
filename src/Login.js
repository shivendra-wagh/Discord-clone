import { Button } from '@mui/material';
import { auth, provider } from "./firebase";
import React from 'react';
import "./Login.css";

function Login() {
 const signIn = () => {
     // do clever google login shizz.......
     auth.signInWithPopup(provider).catch((error) => alert(error.message));
 };

    return (
    <div className='login'>
        <h2> Login With Your Gmail </h2>

        <div className="login__logo">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKAe47GCcFPCo_owiBSRrxbq_P-e-HDVYhw&usqp=CAU"
                alt=""
                />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
    );
}

export default Login
