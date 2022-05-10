import React from "react";
import CommentForm from "./CommentForm";

const Comment = () => {
  return (
    <div className="p-1 d-flex flex-column align-items-center">
      <div className="col-12">
        <img
          src="images/user.jpg"
          className="rounded-circle me-3"
          width="25"
          height="25"
          alt="user"
        />
        <span className="fw-bold">Shobhit Bhatt</span>
        <div className="my-1 py-1 px-2 rounded bg-color col-10 mx-auto fs-comment">
          Comment
        </div>
      </div>
      <div className="col-10 col-md-9 fw-bold text-center d-flex justify-content-evenly">
        <a className="flex-fill text-decoration-none rounded text-info">
          Reply
        </a>
        <a className="flex-fill text-decoration-none rounded text-warning">
          Edit
        </a>
        <a className="flex-fill text-decoration-none rounded text-danger">
          Delete
        </a>
      </div>
      <br />
      <div className="d-none col-10 col-md-11 justify-content-center">
          <CommentForm />
      </div>
    </div>
  );
};

export default Comment;
