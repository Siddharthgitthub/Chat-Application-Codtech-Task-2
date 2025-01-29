import React from "react";

const Message = ({ data }) => {
    return (
        <div className="message">
            <strong>{data.username}:</strong> {data.text} 
            <span className="time">{data.time}</span>
        </div>
    );
};

export default Message;
