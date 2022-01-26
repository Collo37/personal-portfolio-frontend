import { useState, useRef } from "react";

import Button from "../../components/UI components/Button/Button";

import { request } from "../../components/axios";

import "./contactStyles.css";

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("Message Sent");

  const sendMessage = async () => {
    try {
      if (
        name.current.value !== "" &&
        email.current.value !== "" &&
        message.current.value !== ""
      ) {
        await request.post("/contact/send", {
          text: {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value,
          },
        });
        setModalText("Message Sent");
        setShowModal(true);

        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
      } else {
        setModalText("Fill the missing fields");
        setShowModal(true);
      }
    } catch (error) {
      setModalText("Try Again");
      console.log(error);
      setShowModal(true);
    }
  };
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Name" ref={name} />
        <input type="email" placeholder="Email" ref={email} />
        <textarea placeholder="Send me a message" ref={message} />
        <Button text="Send" clicked={sendMessage} />
      </form>
      {showModal && (
        <div className="message-sent">
          <p className="confirmation-text">{modalText}</p>
          <Button text="Ok" clicked={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Contact;
