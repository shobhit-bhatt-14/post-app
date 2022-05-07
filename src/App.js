import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-12 col-md-7 col-lg-4 pt-5">
        <PostForm />
        <br />
        <PostList />
      </div>
    </div>
  );
};

export default App;
