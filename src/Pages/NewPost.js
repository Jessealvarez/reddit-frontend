import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
// import { post } from "../../../reddit-backend/routes/comments";

const NewPost = ({ postSubmit }) => {
  const [postTitle, setPostTitle] = useState("title");
  const [postText, setPostText] = useState("text");
  const navigate = useNavigate();

  return (
    <div id="new-post-form">
      <NavBar />

      <div className="divider"></div>
      <Form>
        <Form.Group className="mb-1" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Title goes here.."
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicBody">
          <Form.Control
            as="textarea"
            placeholder="What's on your mind?"
            rows={3}
            onChange={(e) => setPostText(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={async () => {
            console.log(postText, postTitle);
            postSubmit({
              title: postTitle,
              text: postText,
            });
            navigate("/");
          }}
        >
          Submit
        </Button>
      </Form>

      {/* <Form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="new-post-title"
            placeholder="Title goes here..."
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label"
            onChange={(e) => setPostText(e.target.value)}
          >
            Example textarea
          </label>
          <textarea
            className="form-control"
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
      </Form> */}
    </div>
  );
};

export default NewPost;
