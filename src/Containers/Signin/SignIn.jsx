import React, { useState } from 'react';
import Footer from '../footer/footer'
import './SignIn.css';
import {useNavigate } from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../../firebaseConfig';
// import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Signin = () => {
    // const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    // const auth = getAuth();


    const onSigninClickHandle = (e) => {
        e.preventDefault();
        // signInWithEmailAndPassword(auth, email, password)
        //  .then(suth => {
        //     if(auth){
        //         navigate('/dashboard');
        //     }
        //  })
        //  .catch(error => alert(error.message));
        navigate('/dashboard');
    }

    const emailHandler= (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    return (<>
        <div className="signin-background">
            
            <div className="signin-contain">

                <div className="signin-form">
                    <div className="signin-input">
                        <div className="signin-text">
                            <h2>Sign In</h2>
                        </div>
                        <div className="input-contain">
                            <input type="email" value={email} onChange={emailHandler} placeholder="Email" name="email" />
                            <input type="password" value={password} onChange={passwordHandler} placeholder="Password" name="password" />

                        </div>
                        <div className="singin-button">
                            <button className="button" onClick={onSigninClickHandle}>Sign in</button>
                        </div>
                    </div>
                    <div className="signin-new">
                        <div className="new-to-netflix">
                            <span className='new'>New to netflix?</span>
                            <span className="signup"> Sign up now</span>
                        </div>
                        <div className='google'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='learn'> Learn more.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}
export default Signin;