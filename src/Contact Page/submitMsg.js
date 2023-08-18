import React from "react";
import { Button } from "react-bootstrap";
import SubmitModal from "../Components/UI/ErrModal";

const submitMsg = (props) => {
  const btnHandler = () => {
    props.clk(false);
  };
  return (
    <SubmitModal>
      <div>
        <p className="font-semibold text-center">
          <span className="text-green-600">Thanks !!</span> we will get back to you soon
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="outline-danger" onClick={btnHandler}>
          Close
        </Button>
      </div>
    </SubmitModal>
  );
};

export default submitMsg;
