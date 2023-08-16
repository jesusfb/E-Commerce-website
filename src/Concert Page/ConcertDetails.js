import React,{useState} from "react";
import TktBookMsg from "./TktBookMsg";

const ConcertDetails = (props) => {
  const[display,setDisplay]=useState(false);
  const bookTktHandler=()=>{
    setDisplay(true);
  }
  return (
    <div className="space-y-3">
      <div className="p-3 border-b border-gray-300 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm md:text-base text-black">{props.date}</span>
          <span className="text-sm md:text-base text-red-500">{props.city}</span>
          <span className="text-sm md:text-base">{props.location}</span>
        </div>
        <button className="text-sm md:text-base bg-blue-500 text-white px-4 py-2 rounded" onClick={bookTktHandler}>
          BUY TICKETS
        </button>
      </div>
      {display && <TktBookMsg clk={setDisplay} />}
    </div>
  );
};

export default ConcertDetails;
