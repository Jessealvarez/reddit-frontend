import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import ActionBar from "../Components/ActionBar";
import { Card } from "react-bootstrap";
import NewComment from "../Hooks/NewComment";
// import Comments from "../Components/Comments";

const SinglePage = ({ urlEndpoint }) => {
  const params = useParams();
  const postId = params.postId;

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/posts/single-post/${postId}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setPost(apiJSON);
      return;
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="single-post-page">
        <div>
          <NavBar />
        </div>
        <div className="divider"></div>
        <div>
          <ActionBar />
        </div>
        <div>
          <DisplayPost post={post} />
        </div>
        {/* <>
          <Comments />
        </> */}
      </div>
    </div>
  );
};

const DisplayPost = ({ post, comment, addComment }) => {
  return (
    <div className="posty">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.id}</Card.Text>
          <Card.Text>{post.text}</Card.Text>
          <Card.Text>Posted:{post.createdAt}</Card.Text>
          <NewComment addComment={addComment} post={post} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default SinglePage;
