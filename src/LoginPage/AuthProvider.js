import React,{useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = (props) => {
  const initialToken=localStorage.getItem("Token")
  const[Token,setToken]=useState(initialToken);
  const userLoggedIn=!!Token;
  const loginHandler=(token)=>{
    setToken(token);
    localStorage.setItem('Token',token)
  }
  const logOutHandler=()=>{
    setToken(null);
    localStorage.removeItem("Token")
  }
  const ContextValue={
    token:Token,
    isLoggedIn:userLoggedIn,
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