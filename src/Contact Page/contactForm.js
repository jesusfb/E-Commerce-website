import React, { useRef ,useState} from "react";
import "./contact.css";
import SubmitMsg from "./submitMsg";

const ContactForm = () => {
  const[showMsg,setmsg]=useState(false);
  const Name = useRef("");
  const Email = useRef("");
  const Phone = useRef("");

  const formHandler = async (event) => {
    event.preventDefault();
    const userDetails = {
      name: Name.current.value,
      email: Email.current.value,
      phone_number: Phone.current.value,
    };

    // using Firebase to rcv user Data and send it to the database.
    try {
      const response = await fetch(
        "https://e-commerce-website-2b799-default-rtdb.firebaseio.com/Contact.json",
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setmsg(true);
    } catch (err) {
      alert("Error sending data");
    }
    Name.current.value = "";
    Email.current.value = "";
    Phone.current.value = "";
  };
  return (
    <div className="contain mt-5">
      <form className="contact-form" onSubmit={formHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={Name} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={Email} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" ref={Phone} required />

        <button type="submit" className="btns mt-2">
          Submit
        </button>
      </form>
      {showMsg && <SubmitMsg  clk={setmsg} />}
    </div>
  );
};

export default ContactForm;
