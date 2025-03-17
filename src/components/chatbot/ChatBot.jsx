import { useState, useRef, useEffect } from "react";
import ChatBotIcon from "./ChatBotIcon";

export default function ChatBot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef(null); // Ref for last message
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);

    const botMessage = await getBotResponse(message);
    setChatHistory((prev) => [...prev, botMessage]);

    setMessage("");
  };

  const getBotResponse = async (message) => {
    const BOT_URL = import.meta.env.VITE_GEMINI_URL;

    try {
      const response = await fetch(BOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a movie recommendation assistant created by Ian. 
              Your job is to suggest movies based on the user's request. 
              If the user asks something unrelated to movies, politely bring the conversation back to movie recommendations. 
              Feel free to mention that you were built by Ian, a rebase code camp student if the user asks about your origin.
              
            User's message: "${message}"` }] }],
        }),
      });

      const data = await response.json();
      console.log(data)
      return { 
        sender: "bot", 
        text: data.candidates[0].content.parts[0].text
          .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
          .split('\n') // Split by newline
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          )) 
      };
      
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return { sender: "bot", text: "Sorry, something went wrong!" };
    }
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <>
      {/* Floating Chat Button */}
      <button className="message-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="chatbox open">
          <div className="chat-top">
            <div className="chatbot-icon">
              <ChatBotIcon />
            </div>
            <h2>Streamy</h2>
          </div>

          <div className="chat-body">
            {chatHistory.length === 0 && (
              <div className="message bot-message">
                <div className="chatbot-icon">
              <ChatBotIcon />
            </div>
                <p className="message-text">Hey! How may I help you today?</p>
              </div>
            )}
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "bot" ? "bot-message" : "user-message"}`}
                ref={index === chatHistory.length - 1 ? lastMessageRef : null} 
              >
                {msg.sender === "bot" && <ChatBotIcon />}
                <p className="message-text">{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">➤</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
