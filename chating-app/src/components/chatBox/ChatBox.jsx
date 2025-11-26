import React, { useEffect, useState } from "react";
// import "./ChatPage.css";
import { useLocation, useNavigate } from "react-router-dom";

import {
  sendmessage,
  readmessage,
  deletemessage,
  updatemessage,
} from "../../slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ChatBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const receiver = location.state;

  const chats = useSelector((state) => state.chat.chats || []);

  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editChatId, setEditChatId] = useState(null);

  // Load all messages when chat open
  useEffect(() => {
    if (!receiver || !currentuser) return;
    dispatch(
      readmessage({
        sender: currentuser.email,
        receiver: receiver.email,
      })
    );
  }, [receiver, currentuser, dispatch]);

  // Auto scroll to bottom
  useEffect(() => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }, [chats]);

  const sendMsg = async () => {
    if (!message.trim()) return;

    if (isEditing) {
      await dispatch(
        updatemessage({
          sender: currentuser.email,
          receiver: receiver.email,
          chatid: editChatId,
          newMessage: message,
        })
      );
      setIsEditing(false);
      setEditChatId(null);
    } else {
      await dispatch(
        sendmessage({
          message,
          sender: currentuser.email,
          receiver: receiver.email,
        })
      );
    }

    setMessage("");
  };

  const handleDelete = (chatid) => {
    dispatch(
      deletemessage({
        sender: currentuser.email,
        receiver: receiver.email,
        chatid,
      })
    );
  };

  const handleUpdate = (chat) => {
    if (chat.sender !== currentuser.email) return;
    setMessage(chat.message);
    setIsEditing(true);
    setEditChatId(chat.chatid);
  };

  return (
    <div className="chat-container">
      
      {/* Header */}
      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="chat-user-avatar">
          {receiver.email[0].toUpperCase()}
        </div>
        <div className="chat-user-info">
          <h3>{receiver.email}</h3>
          <span className="status">online</span>
        </div>
      </div>

      
      {/* Chat Body */}
      <div className="chat-body">
        {chats.map((chat) => {
          const side =
            chat.sender === currentuser.email ? "message-right" : "message-left";
          return (
            <div
              key={chat.chatid}
              className={`chat-message ${side}`}
              onClick={() => handleUpdate(chat)}
              onDoubleClick={() => handleDelete(chat.chatid)}
            >
              <div className="bubble">
                {chat.message}{" "}
                {chat.edited && <small>(edited)</small>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input"
          placeholder="Type a message"
        />
        <button className="chat-send-btn" onClick={sendMsg}>
          {isEditing ? "Update" : "Send"}
        </button>
      </div>

    </div>
  );
}