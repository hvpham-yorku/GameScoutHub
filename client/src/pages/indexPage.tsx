import React from "react";
import { Link } from "react-router-dom";

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
          Welcome to GameScoutHub
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your ultimate tool for discovering hidden gaming gems and staying
          updated with the latest gaming news.
        </p>
        <Link
          to="/aboutus"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Learn More About Us
        </Link>
      </div>
      <div className="mt-12">
        <img
          src="/src/assets/images/GameScoutHub_Logo.png"
          alt="Gaming Banner"
          className="w-2/5 mx-auto rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default IndexPage;
