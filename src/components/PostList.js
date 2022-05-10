import React from "react";
import Post from "./Post";

const PostList = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-12 border border-2 border-light rounded shadow my-4 bg-white">
          <Post />
        </div>
        <br />
        <div className="col-12 border border-2 border-light rounded shadow my-4 bg-white">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PostList;
