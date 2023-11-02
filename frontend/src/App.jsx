import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './contexts/UserContext';
import ResponsiveAppBar from './features/AppBar/AppBar';
import Login from './pages/Login';
import Tea from './pages/Tea';

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
  const handleToken = (token) => {
    console.log("handleToken")
    setFormData({ username: '', password: '' })
    localStorage.setItem("token", token)
    setUserToken(token)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClick = (prev) => {
    setChecked(!prev);
  }

  const handleSignUp = () => {
    setSignUp(true)
  }

  const handleLogout = () => {
    var keyToRemove = 'token';
  localStorage.removeItem(keyToRemove);
  setUserToken(false)
  setSignUp(false)
  }


  return (
    <>
    <UserContext.Provider value={userToken}>
      <Router>
      <ResponsiveAppBar handleLogout={handleLogout} />
      <h1>Hello Friends</h1>
      <Routes>
      <Route path="/" element={<Login checked={checked} handleOnClick={handleOnClick} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} token={userToken} signUp={signUp} handleSignUp={handleSignUp}/>} />
      <Route path="tea" element={<Tea/>}/>
      </Routes>
      </Router>
      
      </UserContext.Provider>
    </>
  )
}

export default App
