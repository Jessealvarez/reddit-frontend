import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import NewComment from "../Hooks/NewComment";

const DisplayPost = ({
  post,
  comment,
  addComment,
  commentEnabled,
  redirectEnabled,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  return (
    <div className="posty">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          {/* <Card.Text>{post.id}</Card.Text> */}
          <Card.Text>{post.text}</Card.Text>
          <Card.Text>Posted:{post.createdAt}</Card.Text>

          {commentEnabled && (
            <NewComment
              addComment={addComment}
              post={post}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          )}
          {redirectEnabled && (
            <Button
              onClick={() => {
                navigate(`/single-post/${post.id}`);
              }}
            >
              View Full Post
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayPost;
