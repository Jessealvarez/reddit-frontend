import React from "react";

const PostsPage = ({ posts }) => {
  return (
    <div className="posts-page">
      <h1>Posts Page</h1>
      <div>
        {posts.map((post) => {
          return <DisplayPost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

const DisplayPost = ({ post }) => {
  return (
    <div className="posty">
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
        {post.author}
      </p>

      <p>
        <span>
          <strong> Body: </strong>
          <br />
        </span>
        {post.body}
      </p>
    </div>
  );
};

export default PostsPage;
