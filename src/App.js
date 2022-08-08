import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import PostManager from "./Pages/PostManager";
import NewPost from "./Pages/NewPost";
import PostsPage from "./Pages/Posts";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [isFetching, setIsFetching] = useState(false);
  const [adminPostList, setAdminPostList] = useState({ message: [] });
  const [adminPostsLoading, setAdminPostsLoading] = useState(false);

  const postSubmit = async (post) => {
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
    return responseJSON;
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `${urlEndpoint}/posts/all-posts`;
  //     const apiResponse = await fetch(url);
  //     const apiJSON = await apiResponse.json();
  //     setServerJSON(apiJSON);
  //     return;
  //   };
  //   fetchData();
  // });

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

  //single blog!
  const fetchSinglePost = async (postId) => {
    const url = `${urlEndpoint}/posts/single-post/${postId}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <PostsPage
              posts={serverJSON.message}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
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
      </Routes>
    </div>
  );
}

export default App;
