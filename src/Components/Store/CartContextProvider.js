import React,{useState} from 'react';
import CartContext from './CartContext';

const CartContextProvider = (props) => {
   const [items,setItems]=useState([]);
   const addItemToCart=(it)=>{
    setItems([...items,it])
   }
   const obj={
    item:items,
    addItem:addItemToCart,
   }
  return (
    <CartContext.Provider value={obj}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;