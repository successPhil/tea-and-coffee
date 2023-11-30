import { useState } from "react";
import { signup, login } from "../api/authApi";
import SignIn from "../features/Login/Signup";
import { Navigate } from 'react-router-dom';


export default function Login({setChecked, handleInputChange, handleToken, handleOnClick, checked, token, signUp, handleSignUp, formData}) {
    const [responseMsg, setResponseMsg] = useState('')
    
  
  
    const handleSubmit = async (event) => {
        event.preventDefault();
          if (checked) {
              const data = new FormData(event.currentTarget);
              const context = {
                  username: data.get('username'),
                  password: data.get('password'),
                }
                await signup(context)
                setResponseMsg('Account created successfully! You can now log in.')
                handleOnClick(checked)
          } else {
              const data = new FormData(event.currentTarget);
              // const username = data.get('username')
              const context = {
                  username: data.get('username'),
                  password: data.get('password'),
                }
                const tokenData = await login(context)
                if (tokenData.error) {
                  setResponseMsg(tokenData.body)
                } else {
                  handleToken(tokenData.body, data.get('username'))    
                }
          }
      };

      if (token) {
        return <Navigate to="/home" />;
      }
      return (
        <div className="route-text">
        <SignIn setChecked={setChecked} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleOnClick={handleOnClick} checked={checked} signUp={signUp} handleSignUp={handleSignUp} formData={formData} responseMsg={responseMsg}/>
        </div>
    )
}

// import { signup, login } from "../api/authApi";
// import SignIn from "../features/Login/Signup";
// import { Navigate } from 'react-router-dom';

// export default function Login({ setChecked, handleInputChange, handleToken, handleOnClick, checked, token, signUp, handleSignUp, formData, responseMsg, setResponseMsg }) {
//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         // Wrap the async code in a Promise to use .then().catch()
//         const handleAsync = async () => {
//             if (checked) {
//                 const data = new FormData(event.currentTarget);
//                 const context = {
//                     username: data.get('username'),
//                     password: data.get('password'),
//                 };
//                 await signup(context);
//                 setResponseMsg("Account created successfully! You can now log in.");
//                 handleOnClick(checked);
//             } else {
//                 const data = new FormData(event.currentTarget);
//                 const context = {
//                     username: data.get('username'),
//                     password: data.get('password'),
//                 };
//                 const tokenData = await login(context);
//                 handleToken(tokenData);
//             }
//         };

//         handleAsync().catch((error) => {
//             console.error('Error during login/signup:', error);
//             setResponseMsg(`Error: ${error.response ? error.response.data.detail : error.message}`);
//         });
//     };

//     if (token) {
//         return <Navigate to="/tea" />;
//     }

//     return (
//         <div className="route-text">
//             <SignIn
//                 setChecked={setChecked}
//                 handleSubmit={handleSubmit}
//                 handleInputChange={handleInputChange}
//                 handleOnClick={handleOnClick}
//                 checked={checked}
//                 signUp={signUp}
//                 handleSignUp={handleSignUp}
//                 formData={formData}
//                 responseMsg={responseMsg}
//             />
//         </div>
//     );
// }

