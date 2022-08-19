import React from "react";
import { Card } from "react-bootstrap";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return <DisplayComment comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

const DisplayComment = ({ comment }) => {
  return (
    <div className="posty">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Text className="comment-number">{comment.id}</Card.Text>
          <Card.Text>{comment.text}</Card.Text>
          <Card.Text>Posted:{comment.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comments;
