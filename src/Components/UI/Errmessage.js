import React from "react";
import ErrModal from "./ErrModal";
import { Button } from "react-bootstrap";

const Errmessage = (props) => {
  const btnHandler = () => {
    props.clk(false);
  };
  return (
    <ErrModal>
      <div>
        <p className="font-semibold text-center">
          This Item is Already Added !!
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
    </ErrModal>
  );
};

export default Errmessage;
// ml-20 px-4
