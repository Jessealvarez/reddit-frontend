import "./App.css";
//do I need to import react?
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./Pages/Homepage";

const urlEndpoint = "http://localhost:4000";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
