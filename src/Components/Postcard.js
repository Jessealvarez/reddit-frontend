import React from "react";
import Card from "react-bootstrap/Card";

const Postcard = (props) => {
  const { post, deletePost, fetchPostAndShow } = props;
  // console.log({ post });
  return (
    <div>
      <div id="divider"></div>
      <Card style={{ width: "30rem" }} id="post-manager">
        <Card.Body>
          <Card.Title>Title: {post.title}</Card.Title>
          <Card.Text>Post: {post.text}</Card.Text>
          {/* <Card.Text>Author: {post.author}</Card.Text> */}
          <Card.Text>Created at: {post.createdAt} </Card.Text>
          <Card.Text>Last Modified: {post.lastModified} </Card.Text>
          <button
            type="button"
            className="btn btn-danger"
            onClick={async () => {
              //make SURE that i add .id when creating new posts to db
              await deletePost(post.id);
            }}
          >
            Delete
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={async () => {
              await fetchPostAndShow();
            }}
          >
            Edit Post
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Postcard;
