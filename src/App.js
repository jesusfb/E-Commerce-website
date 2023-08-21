import React,{useContext,Fragment} from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import DuplicateApp from "./DuplicateApp";
import About from "./About Page/About";
import Concert from "./Concert Page/Concert";
import Contact from "./Contact Page/Contact";
import LoginPage from "./LoginPage/Login";
import AuthContext from "./LoginPage/AuthContext";

let App = () => {
  const Authctxt=useContext(AuthContext);
  return (
    <Fragment>
      <Routes>
        {!Authctxt.isLoggedIn && <Route path="/" element={<LoginPage />} />}
        {Authctxt.isLoggedIn && <Route path="/home" element={<DuplicateApp />} />}
        {Authctxt.isLoggedIn && <Route path="/about" element={<About />} />}
        {Authctxt.isLoggedIn && <Route path="/concert" element={<Concert />} />}
        {Authctxt.isLoggedIn && <Route path="/Contact" element={<Contact />} />}
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    </Fragment>
  );
};

export default App;
