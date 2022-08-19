import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import { Button } from "react-bootstrap";

const Modal = (props) => {
  const navigate = useNavigate();
  if (!props.show) {
    return <></>;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Post Editor</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <Button
            type="button"
            class="btn btn primary"
            onClick={() => {
              props.putUpdatedPost();
              props.onClose();
              navigate("/homepage");
              window.location.reload();
            }}
          >
            Update
          </Button>
          <Button type="button" class="btn btn-primary" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
