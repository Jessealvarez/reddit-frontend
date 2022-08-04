import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//Pages
import Homepage from "./Pages/Homepage";
import NewPost from "./Pages/NewPost";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: null });
  const [isFetching, setIsFetching] = useState(false);

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

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <Homepage
              post={serverJSON.message}
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
      </Routes>
    </div>
  );
}

export default App;
