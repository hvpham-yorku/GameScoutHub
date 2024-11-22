import React from "react";

interface NewsProps {
  title: string;
  author: string;
  date: string;
  url: string;
  feedlabel: string;
}

const News: React.FC<NewsProps> = ({ title, author, date, url, feedlabel }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Author:</span> {author}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Date:</span> {new Date(date).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Source:</span> {feedlabel}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm mt-4 block"
      >
        Read more
      </a>
    </div>
  );
};

export default News;