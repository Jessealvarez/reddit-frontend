import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import ActionBar from "../Components/ActionBar";
import { Card } from "react-bootstrap";
import NewComment from "../Hooks/NewComment";
import Comments from "../Components/Comments";
import DisplayPost from "../Components/DisplayPost";
// import { set } from "../../../reddit-backend/app";

const SinglePage = ({ urlEndpoint, addComment }) => {
  const params = useParams();
  const postId = params.postId;

  const [post, setPost] = useState({});
  const [serverComments, setServerComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  //all comments
  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/comments/get-comments/${postId}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerComments(apiJSON.post.postComments);
      console.log(apiJSON);
      return;
    };
    fetchData();
  }, [isLoading]);

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
          <DisplayPost
            post={post}
            addComment={addComment}
            commentEnabled={true}
            redirectEnabled={false}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
        <Comments comments={serverComments} />
      </div>
    </div>
  );
};

export default SinglePage;
