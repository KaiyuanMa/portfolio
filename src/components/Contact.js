import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nckisme",
        "template_n1cinwk",
        form.current,
        "E77Er8tj4zvt7MOYy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-page">
      <div className="page-title">Contact</div>
      <div className="form-container">
        <form className="email-from" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full Name"
            name="guest_name"
            required
          />
          <input type="email" placeholder="Email" name="guest_email" required />
          <input type="text" placeholder="Subject (optional)" name="subject" />
          <textarea
            name="message"
            placeholder="Your message goes here"
          ></textarea>
          <button type="submit" className="email-form-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
