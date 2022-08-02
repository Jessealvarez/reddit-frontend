import React from "react";

const Posts = ({
  posts,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  return (
    <div className="posts-page">
      <h1>Posts Page</h1>
      <label>Sort Field:</label>
      <select
        value={sortField}
        onChange={(event) => {
          const newSortField = event.target.value;
          setSortField(newSortField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="created">Created At</option>
      </select>
      <br />
      <label>Sort Order:</label>
      <select
        value={sortOrder}
        onChange={(event) => {
          const newSortOrder = event.target.value;
          setSortOrder(newSortOrder);
        }}
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <br />
      <label>Filter Field:</label>
      <select
        value={filterField}
        onChange={(event) => {
          const newFilterField = event.target.value;
          setFilterField(newFilterField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <br />
      <label>Filter Value: </label>
      <input
        type="text"
        value={filterValue}
        onChange={(event) => {
          const newFilterValue = event.target.value;
          setFilterValue(newFilterValue);
        }}
      ></input>
      <label>Post Limit:</label>
      <input
        type="number"
        //so that an int less than ONE cannot be input and mess things up
        min="1"
        value={limit}
        onChange={(e) => {
          const newLimit = e.target.value;
          setLimit(newLimit);
        }}
      ></input>
      <br />
      <input
        placeholder="Page"
        type="number"
        min="1"
        value={page}
        onChange={(e) => {
          const newPage = e.target.value;
          setPage(newPage);
        }}
      ></input>
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
    <div className="blogPost">
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

export default Posts;
