import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";


import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import TypicalContactMe from '../../utilities/Typical_Contactme'

import imgBack from "../../images/email-pc-world2.png";
import load1 from "../../images/load2.gif";
import "./ContactMe.css";

function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  //eslint-disable-next-line
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };

      setBool(true);

      const res = await axios.post("/contact", data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
            },
            (error) => {
              console.log("FAILED...", error);
            }
          );

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Let's keep in Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypicalContactMe />
          </h2>
          <a href="https://www.facebook.com/star.mccloud">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/starrika-mccloud/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/xybri/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/Cybre3">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Email Your Full Stack Developer Here ➡ </h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form id="from_person_name" onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleName}
              value={name}
              name="from_person_name"
            />

            <label htmlFor="email"></label>
            <input
              id="person_email"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
              name="person_email"
            />

            <label htmlFor="message"></label>
            <textarea
              id="message"
              type="textarea"
              placeholder="Your message here"
              onChange={handleMessage}
              value={message}
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="img not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
