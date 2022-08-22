import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NewComment = ({ addComment, post, isLoading, setIsLoading }) => {
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
        className="btn btn-primary comment-button"
        onClick={async () => {
          setIsLoading(true);
          await addComment(
            {
              text: comment,
            },
            post.id
          );
          setIsLoading(false); //refresh
        }}
      >
        Comment
      </Button>
    </div>
  );
};

export default NewComment;
