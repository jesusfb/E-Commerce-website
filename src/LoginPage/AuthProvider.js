import React,{useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = (props) => {
  // const initialToken=localStorage.getItem("Token")
  const[Token,setToken]=useState(null);  //put initialToken instead of null.
  const[Mail,setMail]=useState(null);
  const userLoggedIn=!!Token;
  const loginHandler=(token)=>{
    setToken(token);
    // localStorage.setItem('Token',token)
  }
  const logOutHandler=()=>{
    setToken(null);
    setMail(null);
    // localStorage.removeItem("Token")
  }
  const LoggedUserEmailHandler=(inputMail)=>{
    setMail(inputMail);
  }
  const ContextValue={
    token:Token,
    isLoggedIn:userLoggedIn,
    userMail:LoggedUserEmailHandler,
    MailId:Mail,
    Login:loginHandler,
    Logout:logOutHandler
  }
  return (
   <AuthContext.Provider value={ContextValue}>
    {props.children}
   </AuthContext.Provider>
  )
}

export default AuthProvider;