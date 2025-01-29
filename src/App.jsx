import React, { useState } from "react";
import Chat from "./components/Chat";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [isChatActive, setIsChatActive] = useState(false);

    const handleJoinChat = () => {
        if (username.trim() !== "") {
            setIsChatActive(true);
        } else {
            alert("Please enter your name.");
        }
    };

    return (
        <div className="App">
            {!isChatActive ? (
                <div className="join-container">
                    <h1>Welcome to Chat</h1>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleJoinChat}>Join Chat</button>
                </div>
            ) : (
                <Chat username={username} />
            )}
        </div>
    );
}

export default App;
