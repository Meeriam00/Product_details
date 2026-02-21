import  emailjs  from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Home = () => {
  const form = useRef();
  // Dom elementlerine bir basa olaraq istinad ede bilir, state olmadan
  // name, message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cnr7bvv", "template_zndbeae", form.current, "JwneJyVpQnWqKEsst")
      .then(
        () => {
          alert("Message sen successfully!");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name"  placeholder="Your Name" required/>
      <input type="email" name="from_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <h1>Salam</h1>

      <button type="submit">Send</button>
    </form>
    </>
  )
};

export default Home;
