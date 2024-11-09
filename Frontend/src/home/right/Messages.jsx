import React from 'react'
import Message from './Message';

function Messages() {
  return (
    <>
      <div
        className="p-4"
        style={{ minHeight: "calc(93vh - 7vh)" }}
      >
        <Message></Message>
        <Message></Message>
        <Message></Message>
      </div>
    </>
  );
}

export default Messages
