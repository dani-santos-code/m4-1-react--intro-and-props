import React from "react";

import "./ReceivedMessage.css";

function ReceivedMessage(props) {
  return (
    <div className="chat-message">
      <img
        className="message-user-avatar"
        src={props.user.avatar}
        alt="avatar"
      />
      <div className="message-wrapper">
        <div>
          <div className="message-username">{props.user.username}</div>
        </div>
        <div className="message-body">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessage;
