import React from "react";

const CommentForm = () => {
  return (
    <form className="col-12 col-md-11 d-flex">
        <div className="d-flex">
            <img src="images/user.jpg" className="rounded-circle me-3" width="40" height="40" alt="user" />
        </div>
      <div className="flex-fill d-flex">
        <input className="form-control" type="text" />
      </div>
      &emsp;
      <div className="d-flex">
        <button className="btn btn-primary" type="submit">
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
