import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Classes from './Notification.module.css';

const Notification = (props) => {
  const NotificationBox = (props) => ( 
  <div className={Classes.modal}>
    <div>{props.children}</div>
  </div>);
  return (
    <Fragment>
      {ReactDom.createPortal(
        <NotificationBox>{props.children}</NotificationBox>,
        document.getElementById("msgBox")
      )}
    </Fragment>
  );
};

export default Notification;
