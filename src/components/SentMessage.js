import React from "react";
import "./SentMessage.css";

function SentMessage(props) {
  return (
    <div className="sent-chat-message">
      <div className="sent-message-wrapper">
        <p className="sent-message-body">{props.body}</p>
      </div>
    </div>
  );
}

export default SentMessage;
