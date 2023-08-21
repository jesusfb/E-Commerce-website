import React, { Fragment } from "react";

const Homeheading = () => {
  return (
    <Fragment>
      <div className=" bg-red-200">
        <h1 className="p-5 md:p-10 text-4xl md:text-8xl text-center">
          The <span className="text-red-500">Generics</span>
        </h1>
      </div>
      <div>
        <h1 className="text-center font-bold music-heading">Music</h1>
      </div>
    </Fragment>
  );
};

export default Homeheading;
