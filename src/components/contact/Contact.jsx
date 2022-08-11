import "./contact.css";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qnfmaay",
      "template_0uz4vel",
      form.current,
      "KCa9BX7F73JelHnKH"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5> duisensei2608@gmail.com</h5>
            <a href="mailto:duisensei2608@gmail.com">Send A Message</a>
          </article>

          <article className="contact-option">
            <BsMessenger className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Pham Thanh Thai</h5>
            <a href="https://m.me/duihadong">Send A Message</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=0982794075">
              Send A Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Fullname" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
