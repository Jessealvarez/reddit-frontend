import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const NewPost = (postSubmit) => {
  const [postTitle, setPostTitle] = useState("title");
  const [postText, setPostText] = useState("text");

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title Goes Here"
        onChange={(e) => setPostTitle(e.target.value)}
      ></input>
      <br />
      <label>Text</label>
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setPostText(e.target.value)}
      ></input>
      <br />
      <button
        type="submit"
        onClick={async () => {
          postSubmit({
            title: postTitle,
            author: postText,
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewPost;
