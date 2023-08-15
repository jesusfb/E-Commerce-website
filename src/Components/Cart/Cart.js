import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import { Button } from "react-bootstrap";
import "../Navbar/MusicHead.css";
import CartContext from "../Store/CartContext";
import { FaCheckCircle } from "react-icons/fa";

const Cart = (props) => {
  const ctxt = useContext(CartContext);

  // Order message
  const [display, setDisplay] = useState(false);

  let totalAmount = 0;
  ctxt.item.forEach((it) => (totalAmount += it.price));

  const hasItem = ctxt.item.length > 0;

  // For clear cart
  const ClearCartHandler = () => {
    ctxt.clearCart();
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  };

  return (
    <Modal>
      <div className="d-flex justify-end">
        <Button variant="danger" onClick={props.closebtn}>
          X
        </Button>
      </div>
      <div>
        <h2 className="music-heading text-center">CART</h2>
      </div>
      <div className=" overflow-scroll" style={{ maxHeight: "300px" }}>
        {ctxt.item.map((it) => {
          return (
            <div
              className="d-flex flex-col md:flex-row border-b p-4"
              key={it.title}
            >
              <div className="d-flex items-center md:w-1/2 mb-4 md:mb-0">
                <img
                  src={it.imageUrl}
                  className="w-10 h-10 mr-3 rounded md:w-20 md:h-20"
                  alt="error"
                />
                <span className="text-sm md:text-base">{it.title}</span>
              </div>
              <div className="d-flex justify-between items-center md:w-1/2">
                <span className="text-sm md:text-base">${it.price}</span>
                <div className="d-flex items-center">
                  <input
                    type="text"
                    value="x 1"
                    readOnly
                    className="w-10 h-10 border border-red-600 rounded outline-none text-center ml-2 mr-3 md:ml-4 md:mr-2"
                  />
                  <Button
                    variant="danger"
                    className="w-20 h-10 md:w-24 md:h-12"
                    onClick={() => ctxt.removeFromCart(it.title)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="ml-2 d-flex justify-between mt-1 mb-1">
          <span className="text-xl font-bold">
            Total Amount <span className="text-red-600">$ {totalAmount}</span>
          </span>
          {hasItem && (
            <Button
              className="w-20 h-10 md:w-20 md:h-10 mr-4 px-2"
              variant="outline-success"
              onClick={ClearCartHandler}
            >
              Purchase
            </Button>
          )}
        </div>
        <div className="flex justify-center items-center">
          {display && (
            <div className="flex items-center">
              <p className="text-green-600 text-xl text-center ml-2">
                Order Successful
              </p>
              <FaCheckCircle className="text-green-600 ml-2 mb-3" />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
