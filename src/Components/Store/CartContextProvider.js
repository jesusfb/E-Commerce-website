import React,{useState} from 'react';
import CartContext from './CartContext';

const CartContextProvider = (props) => {
  const productsArr = [
    {
      title: "ALBUM 1",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "ALBUM 2",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "ALBUM 3",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "ALBUM 4",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
   const [items,setItems]=useState(productsArr);
   const obj={
    item:items,
   }
  return (
    <CartContext.Provider value={obj}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;