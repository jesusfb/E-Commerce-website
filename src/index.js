import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About Page/About";
import Concert from "./Concert Page/Concert";
import Contact from "./Contact Page/Contact";
/*
import react Bootstrap 
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/", element: <App /> },
  { path: "/concert", element: <Concert /> },
  { path: "/contact", element: <Contact /> },
]);
root.render(<RouterProvider router={router} />);
