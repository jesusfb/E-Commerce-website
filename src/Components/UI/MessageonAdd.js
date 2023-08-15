import React from "react";
import Notification from "./Notification";

const MessageonAdd = (props) => {
  return (
    <Notification>
      <p className="text-center font-semibold">
        <span className="text-blue-800">{props.tit}</span> is added Successfully
        !!
      </p>
    </Notification>
  );
};

export default MessageonAdd;
