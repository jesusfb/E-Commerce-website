import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";

const Modal = (props) => {
  const BackDrop = () => <div className={Classes.backdrop}></div>;

  const ModalOverlay = (props) => (
    <div className={Classes.modal}>
      <div>{props.children}</div>
    </div>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
