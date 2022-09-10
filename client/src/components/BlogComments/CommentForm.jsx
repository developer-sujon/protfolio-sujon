//External Import
import React from "react";
import { useForm } from "react-hook-form";

//Internal Import
import CommentRequest from "../../APIRequest/CommentRequest";

const CommentForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.BlogId = id;
    CommentRequest.CommentCreate(data).then((result) => {
      if (result) {
        CommentRequest.CommentDropDown(id);
        reset();
      }
    });
  };

  return (
    <form className="comment-form mb-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div
          className={`${
            errors.UserName
              ? "form-group col-12 col-md-6  has-error has-danger"
              : "form-group col-12 col-md-6"
          }`}
        >
          <i className="font-icon icon-user" />
          <input
            type="text"
            className="input input__icon form-control"
            id="UserName"
            name="UserName"
            placeholder="Full name"
            {...register("UserName", { required: true })}
          />

          {errors.UserName && (
            <div className="help-block with-errors">
              <ul className="list-unstyled">
                <li>Name is Required</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={`${
            errors.UserEmail
              ? "form-group col-12 col-md-6  has-error has-danger"
              : "form-group col-12 col-md-6"
          }`}
        >
          <i className="font-icon icon-at" />
          <input
            type="email"
            className="input input__icon form-control"
            id="UserEmail"
            name="UserEmail"
            placeholder="Email address"
            {...register("UserEmail", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />

          {errors.UserEmail && (
            <div className="help-block with-errors">
              <ul className="list-unstyled">
                <li>Email is incorrect</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <textarea
            id="commentForm"
            className={`${
              errors.Description
                ? "form-group textarea textarea--white  has-error has-danger"
                : "form-group textarea textarea--white"
            }`}
            placeholder="Write a Comment..."
            rows={1}
            style={{
              overflow: "hidden",
              overflowWrap: "break-word",
              height: 58,
            }}
            {...register("Description", { required: true })}
          />

          {errors.Description && (
            <div className="help-block with-errors">
              <ul className="list-unstyled">
                <li>Comment is Required</li>
              </ul>
            </div>
          )}

          <button type="submit" className="btn">
            <i className="font-icon icon-send" />
            <span />
          </button>
          <div className="dropdown dropup">
            <i
              className="font-icon icon-smile"
              id="dropdownEmoji"
              data-toggle="dropdown"
              aria-haspopup="true"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
