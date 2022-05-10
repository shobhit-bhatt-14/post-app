import React from "react";

const CommentForm = () => {
  return (
    <form className="col-12 col-md-11 d-flex">
      <img
        src="images/user.jpg"
        className="rounded-circle me-3"
        width="40"
        height="40"
        alt="user"
      />
      <input className="form-control" type="text" />
      <button className="btn btn-primary ms-3" type="submit">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
