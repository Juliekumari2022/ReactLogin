import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assests/email.png'
import user_icon from '../Assests/username.png'
import password_icon from '../Assests/password.png'


export const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");
    let username,email,pass;

    const LoginSignupTest=()=>{
        console.log("username:-",username);
        console.log("Password:-",pass);
        console.log("Email:-",email);
    }
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>  
        <div className='inputs'>
            {
                action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name' onChange={(a)=>username=a.target.value}/>
            </div>
            }
            
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email' onChange={(a)=>email=a.target.value}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Password' onChange={(a)=>pass=a.target.value}/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot password?<span>Click here!</span>
            </div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up");LoginSignupTest()}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login");LoginSignupTest()}}>Login</div>
        </div>
    </div>
  )
}

