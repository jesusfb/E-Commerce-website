import React,{useState} from 'react';
import CartContext from './CartContext';

const CartContextProvider = (props) => {
   const [items,setItems]=useState([]);
  

   const addItemToCart=(it)=>{
    setItems((prevItems) => [...prevItems, it]);
   }

  //  Remove from cart on click remove btn
   const removeHandler=(id)=>{
      const updatedData=()=>(
        items.filter(item=> item.title!== id )
      )
      setItems(updatedData);
   }

  //  Clear all item from cart
  const ClearHandler=()=>{
    setItems([]);
  }

   const obj={
    item:items,
    addItem:addItemToCart,
    removeFromCart:removeHandler,
    clearCart:ClearHandler,
   }
  return (
    <CartContext.Provider value={obj}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;