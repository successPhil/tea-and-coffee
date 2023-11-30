import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './contexts/UserContext';
import ResponsiveAppBar from './features/AppBar/AppBar';
import Login from './pages/Login';
import Tea from './pages/Tea';
import Coffee from './pages/Coffee';
import './index.css'
import Footer from './components/TeaNavigation/Footer';
import Home from './pages/Home';
import About from './pages/About';


function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)
  const [checked, setChecked] = useState(false)
  const [signUp, setSignUp ] = useState(false)


  useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setUserToken(token)
    }

  }, [])
  const handleToken = (token, username) => {
    console.log("handleToken")
    setFormData({ username: '', password: '' })
    if (token) {
      localStorage.setItem("token", token)
      localStorage.setItem('username', username)
      setUserToken(token)
    }
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    setChecked(!checked);
  }

  const handleSignUp = () => {
    setSignUp(true)
  }

  const handleLogout = () => {
    var keyToRemove = 'token';
    var usernameKeyToRemove = 'username';
  localStorage.removeItem(keyToRemove);
  localStorage.removeItem(usernameKeyToRemove)
  setUserToken(false)
  setSignUp(false)
  }


  return (
    <>
    <UserContext.Provider value={{userToken}}>
      <Router>
        {userToken && (<ResponsiveAppBar handleLogout={handleLogout} />)}
        <div className='body'>
        <Routes>
          <Route path="/" element={<Login setChecked={setChecked} checked={checked} handleOnClick={handleOnClick} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} token={userToken} signUp={signUp} handleSignUp={handleSignUp}/>} />
          <Route path="tea" element={<Tea/>}/>
          <Route path="coffee" element={<Coffee/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
      </Routes>
        </div>
        {userToken && (<Footer />)}
      </Router>
      
      </UserContext.Provider>
    </>
  )
}

export default App
