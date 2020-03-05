import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  return (
    <div className="chat-message">
      <img className="message-user-avatar" src={props.user.avatar} />
      <div className="message-wrapper">
        <div className="message-username">{props.user.username}</div>
        <div className="message-body">{props.body}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
