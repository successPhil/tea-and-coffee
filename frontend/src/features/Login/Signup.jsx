import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './Signup.css'

function SignIn({ setChecked, handleInputChange, handleSubmit, responseMsg, signUp, formData, checked, handleOnClick, handleSignUp}) {
  console.log('responseMsg', responseMsg)  
  
  return (
    <>
      {responseMsg && <h2>{responseMsg}</h2>}
      <div className="page">
        <div className="login">
          {/* <img className="logo" src={logo} alt="Logo"></img> */}
          <h2>{checked ? 'Sign up' : 'Login'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <div className="icon">
                <FaRegUser />
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                name='password'
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="icon">
                <FaLock />
              </div>
            </div>
            <button type="submit" onClick={() => handleSignUp()}>{checked ? (
              <div className='sign-in-log-in'>Submit</div>
              ) : (
              <div className='sign-in-log-in'>Login</div>
              )}
            </button>
            <div className="signup-link">
              <p onClick={handleOnClick} className='link'>{checked ? 
              ('Already have an account? Login!') 
              :
              ("Don't have an account? Signup!")}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;