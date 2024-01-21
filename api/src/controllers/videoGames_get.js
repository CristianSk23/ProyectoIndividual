const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
const { Videogame, Genres } = require("../db");

const getGames = async (req, res) => {
  try {
    let allGamesDB;
    const listAllGames = [];

    /* const gamesDB = await Videogame.findAll({
      //* Trae todos los videojuegos de la base de datos
      include: { model: Genres, through: "user_Videogame" },
    }); */
    console.log("Llamado al Backend ");
    let listAllGamesAPI = [];
    for (let i = 1; i < 4; i++) {
      //* Trae todos los videojuegos de la API, un total de 120;
      let URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}&page_size=80`;
      const { data } = await axios.get(URL);
      const games = data.results;

      listAllGamesAPI.push(...games);
    }

    const sliceListAllGames = listAllGamesAPI.slice(0, 100); //* recorta a un total de 100

    console.log("Todos los videojuegos ", sliceListAllGames);
/*     if (gamesDB.length > 0) {
      allGamesDB = await gamesDB.map((element) => ({
        id: element.id,
        name: element.name,
        image: element.background_image,
        rating: element.rating,
        platforms: element.platforms,
        released: element.released,
        genres: element.genres,
      }));
      listAllGames.push(...allGamesDB);
    } */

    if (sliceListAllGames.length > 0) {
      const games = sliceListAllGames.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms,
        released: game.released,
        genres: game.genres,
      }));

      listAllGames.push(...games);

      return res.status(200).json(listAllGames);
    } else {
      return res.status(404).send("Not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getGames,
};
