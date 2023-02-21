import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log("hi");
    emailjs
      .sendForm(
        "service_63c7qmd",
        "template_dq3k6z4",
        form.current,
        "fJisSZ8iIANL1-ktk"
      )
      .then(
        (result) => {
          console.log(form.current.value);
          console.log(result);
          setDone(true);
          if (done) {
            alert("Thanks For Contacting me😀");
          }
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact_container" id="Contact">
        <div className="contact_left">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="contact_right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="user"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="send" className="button contact_btn" />
          </form>
          <div
            className="blur contact-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
