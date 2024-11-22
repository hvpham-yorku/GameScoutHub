import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-grey-100 flex justify-center items-center">
      <div className="bg-gray-100 mx-6 sm:mx-12 w-full max-w-screen-lg h-auto py-12 px-8 rounded-3xl shadow-lg border-2 border-gray-300">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          About Us
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Currently, when searching forums, many users express frustration. For
          example, a Reddit user, <span className="italic">@alanwithtea</span>,
          commented:
        </p>

        <blockquote className="bg-gray-400 rounded-lg p-4 italic border-l-4 border-blue-500 mb-6 text-center">
          "Yeah, the discovery queue rarely shows me anything I'm interested in,
          for exactly that reason. I'm more interested in overlooked gems than
          big, popular hits."
        </blockquote>

        <p className="text-gray-800 mb-4 text-center">
          This highlights a major issue in a large community of gamers. The
          number of games that are "findable" with minimal effort is very small,
          as only a few games are recommended by most community members.
        </p>
        <p className="text-gray-600 text-center">
          Our tool is designed to change this experience for users with limited
          time or those seeking efficiency in finding games that align with
          their interests. We aim to make the process of discovering overlooked
          gems more intuitive and rewarding.
        </p>

       
        <div className="flex justify-center mt-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://github.com/hvpham-yorku/GameScoutHub"
              className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 no-underline"
            >
              <span className="flex items-center space-x-5">
                <span className="pr-6 text-gray-100">
                  Github Releases
                </span>
              </span>
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                See what's new &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;