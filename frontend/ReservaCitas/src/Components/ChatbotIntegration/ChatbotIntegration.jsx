import React from 'react';

function ChatbotIntegration() {
  return (
    <div className="chatbot-container">
      <iframe
        title="Chatbot"
        src="https://caa3c087ce0be60d23.gradio.live"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default ChatbotIntegration;
