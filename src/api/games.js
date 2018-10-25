export const componentDidMount = axios =>
  axios(
    "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&order=popularity:desc&limit=6"
  ).then(response => response.json());

export const handleGameSearchChange = (axios, event) =>
  axios(
    `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&search=${
      event.target.value
    }&order=popularity:desc&limit=6`
  ).then(response => response.json());
