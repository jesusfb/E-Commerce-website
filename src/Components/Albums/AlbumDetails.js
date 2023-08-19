import React from "react";
import Modal from "../UI/Modal";
import { Button } from "react-bootstrap";
import "../Navbar/MusicHead.css";
import StarRating from "./StarRating";

const AlbumDetails = (props) => {
  const btnHandler = () => {
    props.onclk(false);
  };

  return (
    <Modal>
      <div
        className="text-center overflow-scroll"
        style={{ maxHeight: "300px" }}
      >
        <img
          src={props.img}
          alt={props.name}
          className="w-64 mx-auto mb-4 border-1 border-red-400 shadow-lg rounded"
        />
        <h1 className="text-xl font-semibold">{props.name}</h1>
        Sing By- <span className="text-green-600">{props.Singer}</span>
        <h1 className="music-heading text-red-600">LYRICS</h1>
        <p>{props.Lyrics}</p>
        <div className="flex justify-center mt-4">
          <StarRating rating={props.Rating} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="outline-danger" onClick={btnHandler}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default AlbumDetails;
