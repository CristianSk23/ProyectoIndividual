const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
/* const { API_KEY } = process.env; */
const getGames = async (req, res) => {
  try {
    console.log("LLAMADO DE TODOS LOS JUEGOS");

    /*     const ids = [1, 2, 3, 4, 5];

    const URLS = await Promise.all(
      ids.map(async (id) => {
        const { data } =
         
        return data;
      })
    ); */

    const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`);
   allData = data.results;

    if (allData.length > 0) {
      const games = allData.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        description: game.description,
        rating: game.rating,
        platforms: game.platforms,
        genres: game.genres,
      }));
      return res.status(200).json(games);
    } else {
      return res.status(404).send("Not found");
    }

    /* if (games.length > 0) {
    } */
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getGames,
};
