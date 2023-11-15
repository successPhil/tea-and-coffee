// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import LoginSnack from './LoginSnack';


// export default function SignIn({checked, handleInputChange, handleOnClick, handleSubmit, signUp, handleSignUp, formData }) {
//   return (
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'green' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h3" color="orange;">
//             <span id="sign-in">Sign in</span>
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//               onChange={handleInputChange}
//               // color="primary"
//               InputLabelProps={{
//                 style: { color: 'black', fontFamily:'Baloo 2'},
//                 shrink: true, 
//               }}
//               InputProps={{
//                 style: { color: 'black', backgroundColor: 'white', fontFamily:'Baloo 2', fontSize:'1.4rem', paddingTop:'0px', paddingLeft:'0px' }}}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={handleInputChange}
//               // color="secondary"
//               InputLabelProps={{
//                 style: { color: 'black', fontFamily:'Baloo 2'},
//                 shrink: true, 
//               }}
//               InputProps={{
//                 style: { color: 'black', backgroundColor: 'white' }}}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="secondary" checked={checked} onClick={() => handleOnClick(checked)} />}
//               label={<span className='sign-in-log-in' style={{ color: 'black'}}>Sign up</span>}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2,fontSize:'1.2rem' }}
//               onClick={()=>handleSignUp()}
//               color="primary"
//             >
//               {checked ? (<div className='sign-in-log-in'>Submit</div>):(<div className='sign-in-log-in'>Sign In</div>)}
//             </Button>
//               <LoginSnack signUp={signUp} formData={formData}/>
//           </Box>
//         </Box>
//       </Container>
//   );
// }


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