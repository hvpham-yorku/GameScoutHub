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
  // const userQueryGenre = req.query.genre as string;

  // // Validate presence of the genre parameter
  // if (!userQueryGenre) {
  //   return res.status(401).json({ msg: "Missing params" });
  // }

  // // Parse and validate user-provided genres
  // const userGenres = userQueryGenre
  //   .split(",")
  //   .map((genre) => genre.trim().toLowerCase());

  // const allGenresValid = userGenres.every((genre) => genreList.includes(genre));

  // if (!allGenresValid) {
  //   return res.status(400).json({ msg: "One or more genres are invalid" });
  // }

  // // Initialize categorized game lists
  // const newReleaseList: IAppDetails[] = [];
  // const topSellersList: IAppDetails[] = [];
  // const comingSoonList: IAppDetails[] = [];
  // const specialsList: IAppDetails[] = [];

  try {
    //   for (const genre of userGenres) {
    //     // Fetch game lists by genre
    //     const response = await axios.get(getAppsInGenreURL + genre);
    //     const { newreleases, topsellers, comingsoon, specials } =
    //       response.data.tabs;

    //     // Fetch and process detailed game data for each category
    //     const newReleaseItems = await fetchGameDetails(newreleases.items, genre);
    //     const topSellerItems = await fetchGameDetails(topsellers.items, genre);
    //     const comingSoonItems = await fetchGameDetails(comingsoon.items, genre);
    //     const specialItems = await fetchGameDetails(specials.items, genre);

    //     // Accumulate results
    //     newReleaseList.push(...newReleaseItems);
    //     topSellersList.push(...topSellerItems);
    //     comingSoonList.push(...comingSoonItems);
    //     specialsList.push(...specialItems);
    //   }

    //   // Shuffle lists for randomness
    //   shuffle(newReleaseList);
    //   shuffle(topSellersList);
    //   shuffle(comingSoonList);
    //   shuffle(specialsList);

    // Respond with the categorized game lists
    // return res.status(200).json({
    //   newrelease: newReleaseList.slice(0, 5),
    //   topseller: topSellersList.slice(0, 5),
    //   comingsoon: comingSoonList.slice(0, 5),
    //   specials: specialsList.slice(0, 5),
    // });
    return res.status(200).json(sampleData);
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
      name: "Diesel Legacy: The Brazen Age",
      website: "https://store.steampowered.com/app/1959140",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1959140/header.jpg?t=1733246549",
      genre: "action",
    },
    {
      name: "Savage Arena: Dead Ball Zone",
      website: "https://store.steampowered.com/app/3319570",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3319570/header.jpg?t=1733255254",
      genre: "action",
    },
    {
      name: "ANTONBLAST",
      website: "https://store.steampowered.com/app/1887400",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887400/header.jpg?t=1733253671",
      genre: "action",
    },
    {
      name: "Space Duck: Escape",
      website: "https://store.steampowered.com/app/3091830",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3091830/header.jpg?t=1733237050",
      genre: "action",
    },
    {
      name: "Mr. Pogo",
      website: "https://store.steampowered.com/app/2272800",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2272800/header.jpg?t=1733224438",
      genre: "action",
    },
    {
      name: "Labernum",
      website: "https://store.steampowered.com/app/3295670",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3295670/header.jpg?t=1733235738",
      genre: "action",
    },
    {
      name: "Void Phantom",
      website: "https://store.steampowered.com/app/3266180",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3266180/header.jpg?t=1733263094",
      genre: "action",
    },
    {
      name: "Lyra Convolution",
      website: "https://store.steampowered.com/app/3328230",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3328230/header.jpg?t=1733238002",
      genre: "action",
    },
  ],
  topseller: [
    {
      name: "Red Dead Redemption 2",
      website: "https://store.steampowered.com/app/1174180",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
      genre: "action",
    },
    {
      name: "STAR WARS™ Empire at War - Gold Pack",
      website: "https://store.steampowered.com/app/32470",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/32470/header.jpg?t=1586462434",
      genre: "action",
    },
    {
      name: "Warhammer 40,000: Space Marine 2",
      website: "https://store.steampowered.com/app/2183900",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/header.jpg?t=1732028471",
      genre: "action",
    },
    {
      name: "HELLDIVERS™ 2",
      website: "https://store.steampowered.com/app/553850",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1730884635",
      genre: "action",
    },
    {
      name: "Cyberpunk 2077",
      website: "https://store.steampowered.com/app/1091500",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296",
      genre: "action",
    },
    {
      name: "Path of Exile 2",
      website: "https://store.steampowered.com/app/2694490",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2694490/header.jpg?t=1733089229",
      genre: "action",
    },
    {
      name: "Path of Exile 2",
      website: "https://store.steampowered.com/app/2694490",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2694490/header.jpg?t=1733089229",
      genre: "action",
    },
    {
      name: "Ghost of Tsushima DIRECTOR'S CUT",
      website: "https://store.steampowered.com/app/2215430",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497",
      genre: "action",
    },
  ],
  comingsoon: [
    {
      name: "Dungeon Hero",
      website: "https://store.steampowered.com/app/3354050",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3354050/header.jpg?t=1732113940",
      genre: "action",
    },
    {
      name: "Entropy Survivors",
      website: "https://store.steampowered.com/app/2602030",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2602030/header.jpg?t=1733171962",
      genre: "action",
    },
    {
      name: "Voyagers of Nera Multiplayer Demo",
      website: "https://store.steampowered.com/app/3368490",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3368490/header.jpg?t=1732598675",
      genre: "action",
    },
    {
      name: "Outlaws vs Aliens",
      website: "https://store.steampowered.com/app/3362780",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3362780/header.jpg?t=1732440684",
      genre: "action",
    },
    {
      name: "Deeper Than Hell",
      website: "https://store.steampowered.com/app/2842010",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2842010/header.jpg?t=1732737509",
      genre: "action",
    },
    {
      name: "Ghosts Attack",
      website: "https://store.steampowered.com/app/3355120",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3355120/header.jpg?t=1732132810",
      genre: "action",
    },
    {
      name: "Rogue Blight Demo",
      website: "https://store.steampowered.com/app/2336830",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2336830/header.jpg?t=1733071381",
      genre: "action",
    },
    {
      name: "Unknown Tapes",
      website: "https://store.steampowered.com/app/2785200",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2785200/header.jpg?t=1733002318",
      genre: "action",
    },
  ],
  specials: [
    {
      name: "Marvel’s Spider-Man Remastered",
      website: "https://store.steampowered.com/app/1817070",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg?t=1725652915",
      genre: "action",
    },
    {
      name: "Warhammer 40,000: Space Marine 2",
      website: "https://store.steampowered.com/app/2183900",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/header.jpg?t=1732028471",
      genre: "action",
    },
    {
      name: "Sekiro™: Shadows Die Twice - GOTY Edition",
      website: "https://store.steampowered.com/app/814380",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1726158438",
      genre: "action",
    },
    {
      name: "God of War",
      website: "https://store.steampowered.com/app/1593500",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1729030762",
      genre: "action",
    },
    {
      name: "Ghost of Tsushima DIRECTOR'S CUT",
      website: "https://store.steampowered.com/app/2215430",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497",
      genre: "action",
    },
    {
      name: "Cyberpunk 2077",
      website: "https://store.steampowered.com/app/1091500",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296",
      genre: "action",
    },
    {
      name: "Red Dead Redemption 2",
      website: "https://store.steampowered.com/app/1174180",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
      genre: "action",
    },
    {
      name: "Hogwarts Legacy",
      website: "https://store.steampowered.com/app/990080",
      header_image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg?t=1717689083",
      genre: "action",
    },
  ],
};
