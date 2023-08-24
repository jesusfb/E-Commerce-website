import React, { useState, useRef, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const LoginPage = () => {
  const Authctxt = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);
  // For Loading state
  const [isLoading, setLoading] = useState(false);
  const userEmail = useRef("");
  const userPassword = useRef("");
  const toggleText = () => {
    if (isLogin) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  const apiKey = process.env.REACT_APP_API_KEY; //For security purpous use api key like this.

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    let EnterEmail = userEmail.current.value;
    let EnterPassword = userPassword.current.value;

    const UserDetails = {
      email: EnterEmail,
      password: EnterPassword,
      returnSecureToken: true,
    };
    //Fetch Data
    let URL;
    if (isLogin) {
      URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    } else {
      URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    }
    try {
      const Response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(UserDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (Response.ok) {
        const Data = await Response.json();
        // Sending Email
        Authctxt.userMail(Data.email)
        
        Authctxt.Login(Data.idToken);
        navigate("/home");
        userEmail.current.value = "";
        userPassword.current.value = "";
      } else {
        const Data = await Response.json();
        let errMessage = "Authentication Failed !!";
        if (Data && Data.error && Data.error.message) {
          errMessage = Data.error.message;
        }
        throw new Error(errMessage);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <div className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-300 flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full md:w-96">
          <h1 className="text-center text-sm font-semibold">
            <span className="text-red-700">😊WELCOME</span> TO{" "}
            <span className="text-pink-600">BOOKMYSHOW😊</span>
          </h1>
          <h1 className="text-2xl font-semibold mb-4 text-center border-b-2 border-red-500">
            {isLogin ? "Login" : "Sign up"}
          </h1>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
                ref={userEmail}
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-700"
                required
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
                ref={userPassword}
              />
            </div>
            {!isLoading && (
              <div className="text-center">
                <button
                  type="Submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring active:bg-blue-800 w-full md:w-auto"
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </div>
            )}
            {isLoading && (
              <p className="text-center text-xl text-red-600 font-semibold">
                Sending Request ....
              </p>
            )}
            <div className="text-center mt-2">
              <button
                className="text-blue-500 border-none hover:bg-white"
                onClick={toggleText}
              >
                {isLogin ? "Create new account" : "Login With existing account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
