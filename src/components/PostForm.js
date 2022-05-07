import React from "react";

const PostForm = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          method="POST"
          className="p-3 border border-2 border-light rounded shadow"
        >
          <div className="mb-3">
            <h3 className="text-center">Create Post</h3>
          </div>
          <div className="mb-3">
            <textarea
              name=""
              id=""
              cols="50"
              rows="4"
              className="form-control"
              placeholder="Type here ..."
            ></textarea>
          </div>
          <div className="mb-3 p-3">
            <p className="text-center">Add photo/video</p>
            <input
              type="file"
              id="media"
              name="media"
              className="form-control"
              accept="image/*,video/*"
            ></input>
          </div>
          <div className="mt-3 text-center">
            <button className="btn btn-primary" type="submit">
              &emsp;Post&emsp;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
