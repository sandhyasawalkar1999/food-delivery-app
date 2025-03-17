import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

  const [currstate, setCurrstate] = useState("Login")


  return (
    <div className='login-popup'>
      <from className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currstate === "Sign Up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continueing, i agree to the terms of use & privacy policy</p>
        </div>
        {currstate === 'Login'
          ? <p>Create a new account? <span onClick={() => setCurrstate("Sign Up")}>Click Here</span></p>
          : <p>Already have a account ?<span onClick={() => setCurrstate("Login")}>Login here</span> </p>
        }

      </from>
    </div>
  )
}

export default LoginPopUp