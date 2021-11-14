import React, { useState } from "react";
import Modal from "react-modal";
function ArchiveModal({ item, modalState, setModalState }) {
  return (
    <Modal
      isOpen={modalState}
      onRequestClose={() => setModalState(false)}
      style={modalStyles}
      contentLabel="Call Details"
    >
      <button className="btn btn-danger" onClick={() => setModalState(false)}>
        X
      </button>
      <div class="card blue-grey darken-1">
        <div class="card-action">
          <a style={{ color: "white" }}>CALL ARCHIVED</a>
        </div>
      </div>
    </Modal>
  );
}

export default ArchiveModal;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
