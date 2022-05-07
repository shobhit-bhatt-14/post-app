import React from "react";

const PostForm = () => {
  const uploadMedia = () => {
    document.querySelector("#media").click();
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          method="POST"
          className="col-12 p-3 border border-2 border-light rounded shadow"
        >
          <div className="d-flex">
            <img
              src="/images/user.jpg"
              className="rounded-circle me-3"
              alt="user"
              height="50"
              width="50"
            />
            <input
              type="text"
              name=""
              id=""
              className="border-0"
              placeholder="Type here ..."
            />
          </div>
          <hr />
          <div className="d-flex justify-content-around align-items-center">
            <input
              type="file"
              id="media"
              name="media"
              className="d-none"
              accept="image/*,video/*"
            />
            <button
              type="button"
              onClick={() => uploadMedia()}
              className="d-flex align-items-center"
            >
              <i className="bi bi-images text-danger fs-3" />
              <span className="ms-1">Add photo/video</span>
            </button>
            <button className="btn btn-primary fw-bold" type="submit">
              &nbsp;Post&nbsp;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
