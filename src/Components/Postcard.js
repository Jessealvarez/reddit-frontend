import React from "react";

const Postcard = (props) => {
  const { post, deletePost, fetchPostAndShow } = props;
  return (
    <div className="title">
      <p>
        <span>
          <strong> Title: </strong>
          <br />
        </span>
        {post.title}
      </p>
      <p>
        <span>
          <strong> Author: </strong>
          <br />
        </span>
        {post.body}
      </p>
      <p>
        <span>
          <strong> Created At: </strong>
          <br />
        </span>
        {post.createdAt}
      </p>
      {/* <p>
        <span>
          <strong> Last Modified: </strong>
          <br />
        </span>
        {post.lastModified}
      </p> */}
      <button
        onClick={async () => {
          //make SURE that i add .id when creating new posts to db
          await deletePost(Post.id);
        }}
      >
        Delete
      </button>
      <br />
      <button
        onClick={async () => {
          await fetchPostAndShow();
        }}
      >
        Edit Post
      </button>
    </div>
  );
};

export default Postcard;
