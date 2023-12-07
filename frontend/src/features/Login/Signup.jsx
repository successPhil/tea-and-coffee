import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import './Signup.css'
import logo from '../../pages/about/assets/Images/Logo_2B.png'
import backgroundImage from '../../pages/about/assets/Images/CoffeeBeanBackground.png'

function SignIn({ setChecked, handleInputChange, handleSubmit, responseMsg, signUp, formData, checked, handleOnClick, handleSignUp}) {
  console.log('responseMsg', responseMsg)  

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`
  }

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1100);
  const [isPhoneScreen, setIsPhoneScreen] = useState(window.innerWidth > 400)

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1250);
      setIsPhoneScreen(window.innerWidth > 550);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
        <div className="login-page" >
        <div className="login-page-border" style={pageStyle}>
          <div className="login-container">
            {isWideScreen && (
            <div className="login-logo">
              <img className="logo" src={logo} alt="Logo"></img>
            </div>
            )}
            <div className="login">
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
                    style={{ fontSize: isPhoneScreen ? '1.5rem' : '1rem'}}
                  />
                  {isPhoneScreen && (
                  <div className="icon">
                    <FaRegUser />
                  </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    style={{ fontSize: isPhoneScreen ? '1.5rem' : '1rem'}}
                  />
                  {isPhoneScreen && (
                  <div className="icon">
                    <FaLock />
                  </div>
                  )}
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
            <div className="response-msg-container">
            {responseMsg && <h2 className="response-msg">{responseMsg}</h2>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;