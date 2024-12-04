import React, { useState } from "react";
import "./HeartButton.css"; // Import the CSS for styling

const HeartButton: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = () => {
    setLiked(!liked);
    if (!liked) {
      console.log("Liked!"); // Action when liked
    } else {
      console.log("Unliked!"); // Action when unliked
    }
  };

  return (
    <button
      className={`heart-button ${liked ? "liked" : ""}`}
      onClick={handleClick}
    >
      ❤️
    </button>
  );
};

export default HeartButton;
