import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import ActionBar from "../Components/ActionBar";
import NewComment from "../Hooks/NewComment";
// import Moment from "react-moment"
// import NewPost from "./NewPost";

const PostsPage = ({ posts, comments, addComment }) => {
  // console.log({ posts });
  // console.log({ comments });
  return (
    <div className="posts-page">
      <div>
        <NavBar />
      </div>
      <div className="divider"></div>
      <div>
        <ActionBar />
      </div>

      {/* <h1>Posts Feed</h1> */}
      <div>
        {posts.map((post, comment) => {
          return (
            <DisplayPost
              post={post}
              comment={comment}
              addComment={addComment}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const DisplayPost = ({ post, comment, addComment }) => {
  return (
    <div className="posty">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          {/* <Card.Title>{post.title}</Card.Title> */}
          <a href={`/single-post/${post.id}`} className="post-title">
            {post.title}
          </a>
          <Card.Text>{post.id}</Card.Text>
          <Card.Text>{post.text}</Card.Text>
          <Card.Text>Posted:{post.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// const DisplayComments = ({ comment }) => {
//   return (
//     <div className="posty">
//       <Card style={{ width: "30rem" }}>
//         <Card.Body>
//           {/* <Card.Title></Card.Title> */}
//           <Card.Text>{comment.text}</Card.Text>
//           <NewComment />
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
export default PostsPage;
