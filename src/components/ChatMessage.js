import React from "react";

import "./ChatMessage.css";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

function ChatMessage(props) {
  if (props.messageType === "sent") {
    return (
      <SentMessage
        message={props.messageType}
        user={props.user}
        body={props.body}
      />
    );
  } else {
    return (
      <ReceivedMessage
        message={props.messageType}
        user={props.user}
        body={props.body}
      />
    );
  }
}

export default ChatMessage;

// function ChatMessage(props) {
//     return (
//       <div className="chat-message">
//         <img className="message-user-avatar" src={props.user.avatar} />
//         <div className="message-wrapper">
//           <div className="message-username">{props.user.username}</div>
//           <div className="message-body">{props.body}</div>
//         </div>
//       </div>
//     );
//   }
