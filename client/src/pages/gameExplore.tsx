import React, { useState, useEffect } from "react";
import GameExploreTab from "../components/gameExploreTab";

const genreList = [
  "action",
  "adventure",
  "strategy",
  "rpg",
  "indie",
  "massively multiplayer",
  "casual",
  "simulation",
  "racing",
  "sports",
];

interface gameExploreProps {
  gameid: string;
  name: string;
  website: string;
  header_image: string;
  genre: string;
}

interface IResponse {
  newrelease: gameExploreProps[];
  topseller: gameExploreProps[];
  comingsoon: gameExploreProps[];
  specials: gameExploreProps[];
}

const GameExplorePage: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [gameLists, setGameLists] = useState<IResponse | null>(null);
  const [likedGames, setLikedGames] = useState<string[]>([]);

  useEffect(() => {
    const fetchLikedGames = async () => {
      try {
        const response = await fetch("/likedgames"); // Ensure correct endpoint
        const data = await response.json();
        setLikedGames(data.likedGames || []);
        console.log("Liked games on mount:", data.likedGames); // Debug
      } catch (error) {
        console.error("Error fetching liked games:", error);
      }
    };
  
    fetchLikedGames();
  }, []);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = async () => {
    const query = selectedGenres.join(",");
    const url = `${import.meta.env.VITE_API_URL}/gamelist/bygenres?genre=${query}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setGameLists(data);
      } else {
        console.error("Server Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

const handleLikeToggle = async (gameid: string, liked: boolean) => {
  try {
    const response = await fetch("/togglelike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameid, saved: liked }),
    });

    if (!response.ok) {
      throw new Error("Failed to toggle like status");
    }

    // Update the liked games in the frontend
    setLikedGames((prev) =>
      liked ? [...prev, gameid] : prev.filter((id) => id !== gameid)
    );

    console.log("Liked games updated:", likedGames); // Debug
  } catch (error) {
    console.error("Error toggling like status:", error);
  }
};

  return (
    <div>
      <div className="bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Select Game Genres
        </h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            {genreList.map((genre) => (
              <label
                key={genre}
                className="flex items-center space-x-3 text-gray-700"
              >
                <input
                  type="checkbox"
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="capitalize">{genre}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>

      {gameLists && (
        <div className="p-6">
          {/* New Release Games */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              New Releases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gameLists.newrelease?.map((game, index) => (
                <GameExploreTab
                  key={index}
                  name={game.name}
                  website={game.website}
                  header_image={game.header_image}
                  genre={game.genre}
                  gameid={game.gameid}
                  liked={likedGames.includes(game.gameid)} // Check if liked
                  onLikeToggle={handleLikeToggle} // Toggle like status
                />
              ))}
            </div>
          </div>

          {/* Top Sellers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Top Sellers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gameLists.topseller?.map((game, index) => (
                <GameExploreTab
                  key={index}
                  name={game.name}
                  website={game.website}
                  header_image={game.header_image}
                  genre={game.genre}
                  gameid={game.gameid}
                  liked={likedGames.includes(game.gameid)} // Check if liked
                  onLikeToggle={handleLikeToggle} // Toggle like status
                />
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gameLists.comingsoon?.map((game, index) => (
                <GameExploreTab
                  key={index}
                  name={game.name}
                  website={game.website}
                  header_image={game.header_image}
                  genre={game.genre}
                  gameid={game.gameid}
                  liked={likedGames.includes(game.gameid)} // Check if liked
                  onLikeToggle={handleLikeToggle} // Toggle like status
                />
              ))}
            </div>
          </div>

          {/* Specials */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Specials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gameLists.specials?.map((game, index) => (
                <GameExploreTab
                  key={index}
                  name={game.name}
                  website={game.website}
                  header_image={game.header_image}
                  genre={game.genre}
                  gameid={game.gameid}
                  liked={likedGames.includes(game.gameid)} // Check if liked
                  onLikeToggle={handleLikeToggle} // Toggle like status
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameExplorePage;
