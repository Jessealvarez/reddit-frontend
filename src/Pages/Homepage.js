import React from "react";

const Homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <p>
        Server Message:
        {props.message.map((post) => {
          return <>{post.title}</>;
        })}
      </p>
    </div>
  );
};

export default Homepage;
