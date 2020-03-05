import React from "react";
import "./SentMessage.css";

function SentMessage(props) {
  return (
    <div className="sent-chat-message">
      <div className="sent-message-wrapper">
        <div className="message-username">{props.user.username}</div>
        <div className="message-body">{props.body}</div>
      </div>
    </div>
  );
}

export default SentMessage;
