import React from "react";
import Postcard from "../Components/Postcard";
import { useState } from "react";
import Modal from "../Components/Modal";

const PostManager = (props) => {
  const { adminPostList, deletePost, fetchSinglePost, urlEndpoint } = props;

  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editText, setEditText] = useState("");
  const [editBlogId, setEditBlogId] = useState(null);

  const putUpdatedPost = async () => {
    const url = `${urlEndpoint}/admin/edit-post`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: editBlogId,
        title: editTitle,
        author: editAuthor,
        text: editText,
      }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };
  return (
    <div>
      <h1>Post Manager</h1>
      <Modal
        title={editTitle}
        onClose={() => setShowModal(false)}
        show={showModal}
        putUpdatedPost={putUpdatedPost}
      >
        <label>Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <br />
        <label>Text</label>
        <textarea
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      </Modal>
      {adminPostList.map((post) => {
        const fetchPostAndShow = async () => {
          const redditPost = await fetchSinglePost(post.id);
          setEditTitle(redditPost.title);
          setEditAuthor(redditPost.author);
          setEditText(redditPost.text);
          setEditBlogId(post.id);
          setShowModal(true);
        };
        return (
          <Postcard
            post={post}
            key={post.id}
            deletePost={deletePost}
            fetchPostAndShow={fetchPostAndShow}
          />
        );
      })}
    </div>
  );
};

export default PostManager;
