import React,{useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = (props) => {
  const[Token,setToken]=useState(null);
  const userLoggedIn=!!Token;
  const loginHandler=(token)=>{
    setToken(token);
  }
  const logOutHandler=()=>{
    setToken(null);
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