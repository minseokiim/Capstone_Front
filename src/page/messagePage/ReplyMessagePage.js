import "./MessagePage.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { BsFillSendFill } from "react-icons/bs";
import apiClient from "../../apiClient";
import { useParams } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

const ReplyMessagePage = ({ isOpen, onRequestClose, messageSender }) => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const studentId = localStorage.getItem("studentId");
  const [postId, setPostId] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleMessageChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (content.trim().length === 0) {
      alert("쪽지 내용을 입력하세요");
      return;
    } else {
      apiClient
        .post("http://localhost:8080/message", {
          receiver: messageSender,
          sender: studentId,
          content,
        })
        .then(() => {
          setContent("");
          onRequestClose();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <VscChromeClose
          className="message-button icon"
          onClick={onRequestClose}
        />
        <form className="p-4">
          <textarea
            className="message-input"
            rows="10"
            cols="40"
            placeholder="쪽지 내용을 입력해주세요."
            value={content}
            onChange={handleMessageChange}
          />
          <br />
          <BsFillSendFill className="message-button" onClick={onSubmit} />
        </form>
      </Modal>
    </div>
  );
};

export default ReplyMessagePage;
