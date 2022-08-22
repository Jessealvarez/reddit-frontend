import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import PostManager from "./Pages/PostManager";
import NewPost from "./Pages/NewPost";
import LoginPage from "./Pages/LoginPage";
// import NavBar from "./Components/NavBar";
import RegistrationPage from "./Pages/RegistrationPage";
import PostsPage from "./Pages/Posts";
import SinglePage from "./Pages/SinglePage";
import Comments from "./Components/Comments";
//hooks
import NewComment from "./Hooks/NewComment";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverPosts, setServerPosts] = useState({ message: [] });
  const [isFetching, setIsFetching] = useState(false);
  const [adminPostList, setAdminPostList] = useState({ message: [] });
  const [adminPostsLoading, setAdminPostsLoading] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const postSubmit = async (post) => {
    console.log("post submitted");

    setIsFetching(true);
    const url = `${urlEndpoint}/posts/post-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const responseJSON = await response.json();
    setIsFetching(false);

    console.log("responseJOSN", responseJSON);

    return responseJSON;
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/posts/all-posts`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerPosts(apiJSON);
      return;
    };
    fetchData();
  }, [isFetching]);

  //DELETE POSTS
  const deletePost = async (postId) => {
    setAdminPostsLoading(true);
    const url = `${urlEndpoint}/admin/delete-post/${postId}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const responseJSON = await response.json();
    setAdminPostsLoading(false);
  };

  useEffect(() => {
    const fetchAdminPostList = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/admin/post-list`);
      const json = await apiResponse.json();
      setAdminPostList(json);
      return;
    };
    fetchAdminPostList();
  }, [adminPostsLoading]);

  //single post!
  const fetchSinglePost = async (postId) => {
    const url = `${urlEndpoint}/posts/single-post/${postId}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };

  //add comment
  const addComment = async (comment, postId) => {
    setIsFetching(true);
    const url = `${urlEndpoint}/comments/new-comment/${postId}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const responseJSON = await response.json();
    setIsFetching(false);
    return responseJSON;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PostsPage
              posts={serverPosts.message}
              isAuthLoading={isAuthLoading}
              setIsAuthLoading={setIsAuthLoading}
            />
          }
        />
        <Route
          path="/new-comment/:postId"
          element={
            <NewComment addComment={addComment} setIsFetching={setIsFetching} />
          }
        />
        <Route
          path="login"
          element={
            <LoginPage
              isAuthLoading={isAuthLoading}
              setIsAuthLoading={setIsAuthLoading}
            />
          }
        />
        <Route
          path="registration"
          element={
            <RegistrationPage
              isAuthLoading={isAuthLoading}
              setIsAuthLoading={setIsAuthLoading}
            />
          }
        />
        <Route
          path="/new-post"
          element={
            <NewPost postSubmit={postSubmit} setIsFetching={setIsFetching} />
          }
        />
        <Route
          path="/post-manager"
          element={
            <PostManager
              adminPostList={adminPostList.message}
              deletePost={deletePost}
              fetchSinglePost={fetchSinglePost}
              urlEndpoint={urlEndpoint}
            />
          }
        />
        <Route
          path="/single-post/:postId"
          element={
            <SinglePage urlEndpoint={urlEndpoint} addComment={addComment} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
