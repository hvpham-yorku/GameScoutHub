import React, { useState, useEffect } from "react";

interface GameExploreTabProps {
  name: string;
  website: string;
  header_image: string;
  genre: string;
  gameid: string;
  liked: boolean; // Pass liked status as a prop
  onLikeToggle: (gameid: string, liked: boolean) => void; // Callback for like/unlike
}

const GameExploreTab: React.FC<GameExploreTabProps> = ({
  name,
  website,
  header_image,
  genre,
  gameid,
  liked,
  onLikeToggle,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  const handleLikeToggle = async () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    // Call the onLikeToggle callback to update the backend
    await onLikeToggle(gameid, newLikedStatus);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left">
      <div className="flex">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Genre:</span> {genre}
      </p>

      {/* Game Image */}
      <img
        src={header_image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mt-4"
      />

      <div className="flex mt-4">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm flex-1"
        >
          Explore it now
        </a>
        <button
          className={`${
            isLiked ? "bg-green-500" : "bg-blue-500"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
          onClick={handleLikeToggle}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default GameExploreTab;