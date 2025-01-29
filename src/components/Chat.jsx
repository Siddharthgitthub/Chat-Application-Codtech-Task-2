import React, { useState } from "react";
import Message from "./Message";

const Chat = ({ username }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (message.trim() !== "") {
            const newMessage = {
                id: Date.now(),
                username,
                text: message,
                time: new Date().toLocaleTimeString(),
            };

            setMessages([...messages, newMessage]);
            setMessage("");
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat Room</h2>
            <div className="messages">
                {messages.map((msg) => (
                    <Message key={msg.id} data={msg} />
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
