//External Import
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

//Internal Import
import Sidebar from "../Sidebar/Sidebar";
import EmailRequest from "../../APIRequest/EmailRequest";

const Contact = () => {
  const { user } = useSelector((state) => state.Profile);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    EmailRequest.EmailCreate(data).then((result) => {
      if (result) {
        reset();
      }
    });
  };

  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <div className="section mt-0">
          <h1 className="title title--h1 title__separate">Contact</h1>
        </div>
        <div class="map section" id="map">
          <iframe
            src={user?.MapLink}
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <h2 class="title title--h2">Contact Form</h2>
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div
              className={`${
                errors.Name
                  ? "form-group col-12 col-md-6  has-error has-danger"
                  : "form-group col-12 col-md-6"
              }`}
            >
              <i className="font-icon icon-user" />
              <input
                type="text"
                className="input input__icon form-control"
                id="Name"
                name="Name"
                placeholder="Full name"
                {...register("Name", { required: true })}
              />

              {errors.Name && (
                <div className="help-block with-errors">
                  <ul className="list-unstyled">
                    <li>Name is Required</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={`${
                errors.To
                  ? "form-group col-12 col-md-6  has-error has-danger"
                  : "form-group col-12 col-md-6"
              }`}
            >
              <i className="font-icon icon-at" />
              <input
                type="email"
                className="input input__icon form-control"
                id="To"
                name="To"
                placeholder="Email address"
                {...register("To", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />

              {errors.To && (
                <div className="help-block with-errors">
                  <ul className="list-unstyled">
                    <li>Email is incorrect</li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={`${
                errors.Message
                  ? "form-group col-12 col-md-12  has-error has-danger"
                  : "form-group col-12 col-md-12"
              }`}
            >
              <textarea
                className="textarea form-control"
                id="messageContact"
                name="messageContact"
                placeholder="Your Message"
                rows={4}
                style={{
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  height: 118,
                }}
                {...register("Message", {
                  required: true,
                })}
              />

              {errors.Message && (
                <div className="help-block with-errors">
                  <ul className="list-unstyled">
                    <li>Message is Required</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
              <div id="validator-contact" className="hidden" />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 text-right">
              <button type="submit" className="btn disabled">
                <i className="font-icon icon-send" /> Send Message
                <span />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
