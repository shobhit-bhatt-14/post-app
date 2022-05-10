import React from "react";
import Comment from "./Comment";

const CommentList = () => {
  return <div className="col-12 col-md-11 d-flex flex-column">
      <Comment />
      <br />
      <Comment />
      <br />
      <Comment />
  </div>;
};

export default CommentList;
