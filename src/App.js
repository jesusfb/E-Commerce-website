import React, { Fragment } from "react";
import Navbars from "./Components/Navbar/Navbar";
import Album from "./Components/Navbar/Albums/AlbumItem";

let App = () => {
  return (
    <Fragment>
      <Navbars />
      <Album />
    </Fragment>
  );
};

export default App;
