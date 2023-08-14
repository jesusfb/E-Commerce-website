import React, { useState } from "react";
import Navbars from "./Components/Navbar/Navbar";
import Album from "./Components/Albums/AlbumItem";
import CartContextProvider from "./Components/Store/CartContextProvider";
import CartItem from "./Components/Cart/Cart";

let App = () => {
  const [isDisplay,setDisplay]=useState(false);

  const Carthandler=()=>{
    setDisplay(true);
  }

  const CloseCart=()=>{
    setDisplay(false);
  }
  return (
    <CartContextProvider>
      {isDisplay && <CartItem closebtn={CloseCart}/>}
      <Navbars cartHandler={Carthandler}/>
      <Album />
    </CartContextProvider>
  );
};

export default App;

