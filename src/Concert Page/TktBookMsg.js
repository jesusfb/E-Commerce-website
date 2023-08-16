import React from "react";
import MsgModal from "./MsgModal";
import { Button } from "react-bootstrap";

const TktBookMsg = (props) => {
  const btnHandler = () => {
    props.clk(false);
  };
  return (
    <MsgModal>
      <div>
        <p className="font-semibold text-center">
         <span className="text-green-800">Thanks !!</span> Your Ticket Is Booked.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-danger"
          onClick={btnHandler}
        >
          Close
        </Button>
      </div>
    </MsgModal>
  );
};

export default TktBookMsg;
