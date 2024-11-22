import React, { useEffect, useState } from "react";
import News from "./news";
import axios from "axios";

interface NewsItem {
  title: string;
  author: string;
  date: string;
  url: string;
  feedlabel: string;
}

interface GameNews {
  gamename: string;
  news: NewsItem[];
}

const ListOfNews: React.FC = () => {
  const [newsList, setNewsList] = useState<GameNews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/news");
        setNewsList(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-h-screen overflow-y-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {newsList.map((game, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-serif text-gray-800 mb-4 tracking-wide">{game.gamename}</h2>
          <div className="space-y-4">
            {game.news.map((newsItem, idx) => (
              <News
                key={idx}
                title={newsItem.title}
                author={newsItem.author}
                date={newsItem.date}
                url={newsItem.url}
                feedlabel={newsItem.feedlabel}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ListOfNews;
