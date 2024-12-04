import { useState } from "react";

interface gameExploreProps {
  name: string;
  website: string;
  header_image: string;
  genre: string;
}

const GameExploreTab = (props: {
  name;
  website;
  header_image;
  genre;
  gameid;
}) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = () => {
    console.log(props.name);
    setLiked(!liked);
    if (!liked) {
      console.log("Liked!"); // Action when liked
    } else {
      console.log("Unliked!"); // Action when unliked
    }
  };
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left">
      <div className="flex">
        <h3 className="text-lg font-semibold text-gray-800">{props.name}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Genre:</span> {props.genre}
      </p>

      <div className=" flex">
        <a
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm mt-4 block flex-1"
        >
          Explore it now
        </a>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          {!props.liked ? "Like" : "Liked"}
        </button>
      </div>
    </div>
  );
};

export default GameExploreTab;
