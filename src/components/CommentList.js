import React from "react";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div className="col-12 col-md-11 d-flex flex-column">
      <div className="border rounded-comment p-1">
        <Comment />
      </div>
      <br />
      <div className="border rounded-comment p-1">
        <Comment />
      </div>
      <br />
      <div className="border rounded-comment p-1">
        <Comment />
      </div>
    </div>
  );
};

export default CommentList;
