import React from "react";
import HeartButton from "./gameExploreLikeButton";

interface gameExploreProps {
  name: string;
  website: string;
  header_image: string;
  genre: string;
}

const GameExploreTab = (props: { name; website; header_image; genre }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left">
      <div className="flex">
        <h3 className="text-lg font-semibold text-gray-800">{props.name}</h3>
        {/* <HeartButton /> */}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Genre:</span> {props.genre}
      </p>

      <a
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm mt-4 block"
      >
        Explore it now
      </a>
    </div>
  );
};

export default GameExploreTab;
