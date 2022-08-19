import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NewComment = ({ addComment, post }) => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  console.log({ comment });

  return (
    <div>
      <input
        className="comments"
        type="text"
        placeholder="Add comment..."
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <Button
        type="submit"
        class="btn btn-primary"
        className="comment-button"
        onClick={async () => {
          await addComment(
            {
              text: comment,
            },
            post.id
          );
          navigate("/posts/");
        }}
      >
        Comment
      </Button>
    </div>
  );
};

export default NewComment;
