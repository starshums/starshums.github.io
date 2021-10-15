import { motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
init(process.env.REACT_APP_EMAILJS_ID);

const Contact = () => {

  const form = document.querySelector('#contact-form');
  const [contactNumber, setContactNumber] = useState("000000");
  const [loading, setLoading] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    generateContactNumber();
    sendForm('default_service', 'template_slgsuyl', '#contact-form')
      .then(function (response) {
        form.reset();
        setLoading(false);
        setStatusMessage({
          message: "Email sent! Thank you for your message!",
          class: "message-success"
        });
      }, function (error) {
        setStatusMessage({
          message: "Error! Failed to send message! Please try again later.",
          class: "message-error"
        });
        setLoading(false);
      });
  }

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <Fragment>
        <div className="bottom">
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
            <h2 className="projects-section-title">
              <i className={"fas fa-info-circle"}></i> Contact Me
            </h2>
            <input type='hidden' name='contact_number' value={contactNumber} />
            <label htmlFor="user_name"> Name
              {errors.user_name && errors.user_name.type === "required" && (
                <span role="alert">*(Name is required)</span>
              )} </label> <br /><br />
            <input type='text'
              name='user_name'
              placeholder='Name'
              maxLength='30'
              aria-invalid={errors.user_name ? "true" : "false"}
              {...register("user_name", { required: true })} />
            <br />
            <br />
            <label htmlFor="user_email"> Email
              {errors.user_email && errors.user_email.type === "required" && (
                <span role="alert">*(Email is required)</span>
              )}</label> <br /><br />
            <input type='email'
              name='user_email'
              placeholder='Email'
              aria-invalid={errors.user_email ? "true" : "false"}
              {...register("user_email", { required: true })} />
            <br />
            <br />
            <label htmlFor="message"> Message
              {errors.message && errors.message.type === "required" && (
                <span role="alert">*(Message is required)</span>
              )}</label> <br /><br />
            <textarea name='message'
              placeholder='Message'
              maxLength='1500'
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", { required: true })} />
            <br />
            <br />
            <button className="form-submit" type="submit">
              {loading ? <img src="tail-spin.svg" alt="loading" /> : "Send"}
            </button>
            <br />
            {statusMessage ? <p align="center" className={statusMessage.class}><i className={"fas fa-info-circle"}> </i> <span>{statusMessage.message}</span> </p> : null}
            <br />
          </form>
        </div>
      </Fragment>
    </motion.div>
  );
};

export default Contact;
