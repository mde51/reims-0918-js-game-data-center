import axios from "axios";

export const fetchGames = (page, gameSearch) => {
  const searchString = gameSearch ? `&search=${gameSearch}` : "";
  return axios.get(
    `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*${searchString}&order=popularity:desc&limit=6&offset=${page *
      6}`,
    {
      headers: {
        "user-key": "fecd6414efd5e0abab75643c9116d301",
        Accept: "application/json"
      }
    }
  );
};
