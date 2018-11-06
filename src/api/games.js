import axios from "axios";

export const fetchGames = (page, gameSearch) => {
  const searchString = gameSearch ? `&search=${gameSearch}` : "";
  return axios.get(
    `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*${searchString}&order=popularity:desc&limit=6&offset=${page *
      6}`,
    {
      headers: {
        "user-key": "cbb82cff9c17815a56e39c667661a7cb",
        Accept: "application/json"
      }
    }
  );
};
