import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Classes from './MsgModal.module.css';

const MsgModal = (props) => {
  const BackDrop = () => <div className={Classes.backdrop}></div>;

  const ModalOverlay = (props) => (
    <div className={Classes.modal}>
      <div>{props.children}</div>
    </div>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("tktMsg"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("tktMsg")
      )}
    </Fragment>
  );
};

export default MsgModal;
