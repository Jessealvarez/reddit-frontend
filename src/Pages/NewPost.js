import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";

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
            postSubmit({
              title: postTitle,
              text: postText,
            });
            navigate("/homepage");
          }}
        >
          Submit
        </Button>
      </Form>

      {/* <Form>
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
      </Form> */}
    </div>
  );
};

export default NewPost;
