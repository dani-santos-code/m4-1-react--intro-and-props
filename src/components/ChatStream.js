import React from "react";

import "./ChatStream.css";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream({ messages }) {
  return (
    <section className="chat-stream">
      {messages.map(message => (
        <ul>
          <li>{message.body}</li>
        </ul>
      ))}
    </section>
  );
}

export default ChatStream;
