import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from './ErrAdd.module.css';

const Errmsg = (props) => {
  const BackDrop = () => <div className={Classes.backdrop}></div>;

  const ModalOverlay = (props) => (
    <div className={Classes.modal}>
      <div>{props.children}</div>
    </div>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("errMsg"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("errMsg")
      )}
    </Fragment>
  );
};

export default Errmsg;
