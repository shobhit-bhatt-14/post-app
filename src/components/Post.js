import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Post = () => {
  return (
    <div className="Post p-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src="/images/user.jpg"
            className="rounded-circle me-3"
            alt="user"
            height="50"
            width="50"
          />
          <div className="ms-1">
            <div>Shobhit Bhatt</div>
            <div>2 mins ago</div>
          </div>
        </div>
        <a className="text-secondary rounded-circle">
          <i className="bi bi-three-dots-vertical fs-4" />
        </a>
      </div>
      <hr />
      <div className="text-center">
        <p className="text-start">This is great.</p>
        <img className="postMedia rounded" src="/images/post.jpg" alt="post" />
      </div>
      <hr />
      <div className="d-flex">
        <div className="flex-fill d-flex justify-content-center align-items-center">
          <a className="text-decoration-none text-secondary px-3 py-1 rounded">
            <i className="bi bi-hand-thumbs-up fs-4" />
            &ensp;
            <span>Like</span>
          </a>
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-center">
          <a className="text-decoration-none text-secondary px-3 py-1 rounded">
            <i className="bi bi-chat-dots fs-4" />
            &ensp;
            <span>Comment</span>
          </a>
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-center">
          <div className="text-decoration-none text-dark">
            5 Likes &bull; 2 Comments
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <CommentList />
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <CommentForm />
      </div>
    </div>
  );
};

export default Post;
