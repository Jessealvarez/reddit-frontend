//do I need to import React?
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//need to import a submitNewPost() function from a different hook?
const NewPost = () => {
  const [postTitle, setPostTitle] = useState("title");
  const [postBody, setPostBody] = useState("body");

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title Goes Here"
        onChange={(e) => setPostTitle(e.target.value)}
      ></input>
      <br />
      <label>Body</label>
      <input
        type="text"
        placeholder="Body"
        onChange={(e) => setPostBody(e.target.value)}
      ></input>
      <br />
      <button
        type="submit"
        onClick={async () => {
          submitNewPost();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewPost;
