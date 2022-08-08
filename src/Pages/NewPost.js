import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const NewPost = ({ postSubmit }) => {
  const [postTitle, setPostTitle] = useState("title");
  const [postText, setPostText] = useState("text");
  const navigate = useNavigate();

  return (
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="new-post-title"
          placeholder="Title goes here..."
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label
          for="exampleFormControlTextarea1"
          class="form-label"
          onChange={(e) => setPostText(e.target.value)}
        >
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <br />
      <button
        type="submit"
        //Not working-needs to push/insertOne?
        onClick={async () => {
          postSubmit({
            title: postTitle,
            text: postText,
          });
          navigate("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewPost;
