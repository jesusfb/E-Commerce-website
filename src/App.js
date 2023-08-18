import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DuplicateApp from "./DuplicateApp";
import About from "./About Page/About";
import Concert from "./Concert Page/Concert";
import Contact from "./Contact Page/Contact";

let App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<DuplicateApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default App;
