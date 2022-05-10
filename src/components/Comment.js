import React from "react";

const Comment = () => {
  return (
    <div className="d-flex flex-column align-items-center border rounded shadow-sm p-2">
      <span className="text-center">Comment</span>
      <div className="col-12 col-md-9 fw-bold fs-6 text-center d-flex">
        <a className="flex-fill text-decoration-none rounded text-info">Reply</a>
        <a className="flex-fill text-decoration-none rounded text-danger">Delete</a>
      </div>
    </div>
  );
};

export default Comment;
