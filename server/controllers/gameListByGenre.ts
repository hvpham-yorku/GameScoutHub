import { Request, Response } from "express";
import axios from "axios";

// Base URLs for Steam API requests
const getAppsInGenreURL =
  "https://store.steampowered.com/api/getappsingenre?l=us&genre=";
const getAppDetailsURL =
  "https://store.steampowered.com/api/appdetails?filters=basic,website&appids=";

// List of valid genres
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

// Interface for game details
interface IAppDetails {
  name: string;
  website: string;
  header_image: string;
  genre: string;
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param array - The array to shuffle.
 */
function shuffle(array: any[]): void {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

/**
 * Retrieves a list of games categorized by genre and sends a response.
 * Supports filtering by user-provided genres and returns categorized game lists.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 */
export default async function gameListByGenre(req: Request, res: Response) {
  const userQueryGenre = req.query.genre as string;

  // Validate presence of the genre parameter
  if (!userQueryGenre) {
    return res.status(401).json({ msg: "Missing params" });
  }

  // Parse and validate user-provided genres
  const userGenres = userQueryGenre
    .split(",")
    .map((genre) => genre.trim().toLowerCase());

  const allGenresValid = userGenres.every((genre) => genreList.includes(genre));

  if (!allGenresValid) {
    return res.status(400).json({ msg: "One or more genres are invalid" });
  }

  // Initialize categorized game lists
  const newReleaseList: IAppDetails[] = [];
  const topSellersList: IAppDetails[] = [];
  const comingSoonList: IAppDetails[] = [];
  const specialsList: IAppDetails[] = [];

  try {
    for (const genre of userGenres) {
      // Fetch game lists by genre
      const response = await axios.get(getAppsInGenreURL + genre);
      const { newreleases, topsellers, comingsoon, specials } =
        response.data.tabs;

      // Fetch and process detailed game data for each category
      const newReleaseItems = await fetchGameDetails(newreleases.items, genre);
      const topSellerItems = await fetchGameDetails(topsellers.items, genre);
      const comingSoonItems = await fetchGameDetails(comingsoon.items, genre);
      const specialItems = await fetchGameDetails(specials.items, genre);

      // Accumulate results
      newReleaseList.push(...newReleaseItems);
      topSellersList.push(...topSellerItems);
      comingSoonList.push(...comingSoonItems);
      specialsList.push(...specialItems);
    }

    // Shuffle lists for randomness
    shuffle(newReleaseList);
    shuffle(topSellersList);
    shuffle(comingSoonList);
    shuffle(specialsList);

    // Respond with the categorized game lists
    return res.status(200).json({
      newrelease: newReleaseList.slice(0, 8),
      topseller: topSellersList.slice(0, 8),
      comingsoon: comingSoonList.slice(0, 8),
      specials: specialsList.slice(0, 8),
    });
  } catch (error) {
    console.error("Error fetching game details:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

/**
 * Fetches detailed game information for a list of game items.
 * @param items - List of game items (each containing type and id).
 * @param genre - The genre of the games.
 * @returns A promise resolving to a list of detailed game objects.
 */
async function fetchGameDetails(
  items: { type: string; id: string }[],
  genre: string
): Promise<IAppDetails[]> {
  return Promise.all(
    items.map(async (item) => {
      const appid = item.id;
      try {
        const response = await axios.get(getAppDetailsURL + appid);
        const { name, website, header_image } = response.data[`${appid}`].data;
        return { name, website, header_image, genre };
      } catch (error) {
        console.error(`Error fetching details for app ID ${appid}:`, error);
        return null;
      }
    })
  ).then((results) => results.filter(Boolean) as IAppDetails[]);
}
