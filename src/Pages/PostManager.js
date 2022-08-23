import React from "react";
import NavBar from "../Components/NavBar";
import Postcard from "../Components/Postcard";
import { useState } from "react";
import Modal from "../Components/Modal";

const PostManager = (props) => {
  const { adminPostList, deletePost, fetchSinglePost, urlEndpoint } = props;

  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  // const [editAuthor, setEditAuthor] = useState("");
  const [editText, setEditText] = useState("");
  const [editPostId, setEditPostId] = useState(null);

  const putUpdatedPost = async () => {
    const url = `${urlEndpoint}/admin/edit-post`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: editPostId,
        title: editTitle,
        text: editText,
      }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="divider"></div>
      <Modal
        title={editTitle}
        onClose={() => setShowModal(false)}
        show={showModal}
        putUpdatedPost={putUpdatedPost}
      >
        <input
          type="text"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <div className="small-divider"></div>
        <textarea
          rows="8"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      </Modal>
      {adminPostList.map((post, idx) => {
        const fetchPostAndShow = async () => {
          const redditPost = await fetchSinglePost(post.id);
          setEditTitle(redditPost.title);
          setEditText(redditPost.text);
          setEditPostId(post.id);
          setShowModal(true);
        };
        return (
          <Postcard
            post={post}
            key={idx}
            deletePost={deletePost}
            fetchPostAndShow={fetchPostAndShow}
          />
        );
      })}
    </div>
  );
};

export default PostManager;
