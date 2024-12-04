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
      //Respond with the categorized game lists
      return res.status(200).json({
        newrelease: newReleaseList.slice(0, 5),
        topseller: topSellersList.slice(0, 5),
        comingsoon: comingSoonList.slice(0, 5),
        specials: specialsList.slice(0, 5),
      });
    // return res.status(200).json(sampleData);
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
        return {
          gameid: appid,
          name,
          website: `https://store.steampowered.com/app/${appid}`,
          header_image,
          genre,
        };
      } catch (error) {
        console.error(`Error fetching details for app ID ${appid}:`, error);
        return null;
      }
    })
  ).then((results) => results.filter(Boolean) as IAppDetails[]);
}

const sampleData = {
  newrelease: [
    {
      gameid: 3091830,
      name: "Space Duck: Escape",
      website: "https://store.steampowered.com/app/3091830",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3091830/header.jpg?t=1733237050",
      genre: "action",
    },
    {
      gameid: 3017910,
      name: "Arrowscapades",
      website: "https://store.steampowered.com/app/3017910",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3017910/header.jpg?t=1733288787",
      genre: "action",
    },
    {
      gameid: 3331640,
      name: "Tank Frenzy Survivor",
      website: "https://store.steampowered.com/app/3331640",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3331640/header.jpg?t=1733255333",
      genre: "action",
    },
    {
      gameid: 3281190,
      name: "They Yearn For The Mines",
      website: "https://store.steampowered.com/app/3281190",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3281190/header.jpg?t=1733299850",
      genre: "action",
    },
    {
      gameid: 3328230,
      name: "Lyra Convolution",
      website: "https://store.steampowered.com/app/3328230",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3328230/header.jpg?t=1733238002",
      genre: "action",
    },
  ],
  topseller: [
    {
      gameid: 32470,
      name: "STAR WARS™ Empire at War - Gold Pack",
      website: "https://store.steampowered.com/app/32470",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/32470/header.jpg?t=1586462434",
      genre: "action",
    },
    {
      gameid: 990080,
      name: "Hogwarts Legacy",
      website: "https://store.steampowered.com/app/990080",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg?t=1717689083",
      genre: "action",
    },
    {
      gameid: 2215430,
      name: "Ghost of Tsushima DIRECTOR'S CUT",
      website: "https://store.steampowered.com/app/2215430",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497",
      genre: "action",
    },
    {
      gameid: 1174180,
      name: "Red Dead Redemption 2",
      website: "https://store.steampowered.com/app/1174180",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
      genre: "action",
    },
    {
      gameid: 2933620,
      name: "Call of Duty®: Black Ops 6",
      website: "https://store.steampowered.com/app/2933620",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg?t=1731604753",
      genre: "action",
    },
  ],
  comingsoon: [
    {
      gameid: 2506810,
      name: "Pest Apocalypse",
      website: "https://store.steampowered.com/app/2506810",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2506810/header.jpg?t=1733156626",
      genre: "action",
    },
    {
      gameid: 2785200,
      name: "Unknown Tapes",
      website: "https://store.steampowered.com/app/2785200",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2785200/header.jpg?t=1733002318",
      genre: "action",
    },
    {
      gameid: 2602030,
      name: "Entropy Survivors",
      website: "https://store.steampowered.com/app/2602030",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2602030/header.jpg?t=1733171962",
      genre: "action",
    },
    {
      gameid: 3325260,
      name: "TANK ZERO",
      website: "https://store.steampowered.com/app/3325260",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3325260/header.jpg?t=1731721668",
      genre: "action",
    },
    {
      gameid: 2842010,
      name: "Deeper Than Hell",
      website: "https://store.steampowered.com/app/2842010",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842010/header.jpg?t=1732737509",
      genre: "action",
    },
  ],
  specials: [
    {
      gameid: 553850,
      name: "HELLDIVERS™ 2",
      website: "https://store.steampowered.com/app/553850",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1730884635",
      genre: "action",
    },
    {
      gameid: 1593500,
      name: "God of War",
      website: "https://store.steampowered.com/app/1593500",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1729030762",
      genre: "action",
    },
    {
      gameid: 1174180,
      name: "Red Dead Redemption 2",
      website: "https://store.steampowered.com/app/1174180",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
      genre: "action",
    },
    {
      gameid: 1091500,
      name: "Cyberpunk 2077",
      website: "https://store.steampowered.com/app/1091500",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296",
      genre: "action",
    },
    {
      gameid: 814380,
      name: "Sekiro™: Shadows Die Twice - GOTY Edition",
      website: "https://store.steampowered.com/app/814380",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1726158438",
      genre: "action",
    },
  ],
};
