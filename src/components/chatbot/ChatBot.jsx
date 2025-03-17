import ChatBotIcon from "./ChatBotIcon";
import { useState } from "react";

export default function ChatBot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMesaage] = useState("");

  const handleSendMessage = () => {

  }
  return (
    <div className="chatbox">
      <div className="chat-top">
        <ChatBotIcon />
        <h2>Streamy</h2>
      </div>
      <div className="chat-body">
        <div className='message bot-message'>
        <ChatBotIcon />
        <p className='message-text'>
            Hey!!! <br /> How may I help you today?
        </p>
        </div>
        <div className='message user-message'>
        <ChatBotIcon />
        <p className='message-text'>
           lorem ipsum dolor amit si ipnum
        </p>
        </div>
      </div>
      <div className="chat-input">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={() => setMessage(e.target.value)}
          />
          <button type="submit">
            <svg
              height="200"
              width="200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="fePaperPlane0"
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
              >
                <g id="fePaperPlane1" fill="currentColor" fillRule="nonzero">
                  <path
                    id="fePaperPlane2"
                    d="m13.761 12.01l-10.76-1.084L3 4.074a1.074 1.074 0 0 1 1.554-.96l15.852 7.926a1.074 1.074 0 0 1 0 1.92l-15.85 7.926a1.074 1.074 0 0 1-1.554-.96v-6.852l10.76-1.064Z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
