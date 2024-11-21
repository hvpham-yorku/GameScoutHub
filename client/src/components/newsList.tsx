import React, { useState, useEffect } from "react";
import "./SlidingNews.css";

const SlidingNews = () => {
  const newsItems = [
    "Set 13 Info is now available! Check out the Team Builder and Tier List maker!",
    "New Perfect Synergies update is live now!",
    "Don't miss out on the latest updates to Player Stats!",
    "Exciting new features coming soon. Stay tuned!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // Change the news every 4 seconds
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="sliding-news-bar">
      <div className="news-container">
        <span className="new-tag">NEW</span>
        <div className="news-item">
          {newsItems[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default SlidingNews;