const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
const { Videogame, Genres } = require("../db");
const { Op } = require("sequelize");

const getByName = async (req, res) => {
  try {
    const searchTerm = req.query.name;
    console.log("termino de busqueda enviado desde el front " , searchTerm);

    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`;

    const gamesDB = await Videogame.findAll({
      where: {
        name: { [Op.iLike]: `%${searchTerm}%` },
      },

      include: { model: Genres, trough: "user_Videogame" },
    });
    const { data } = await axios.get(URL); //* Para buscar lo enviado por query en la API

    const gamesAPI = data.results.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
      description: game.description,
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres,
    }));

    /* console.log(" Videojuegos traidos de la API con la busqueda " , gamesAPI); */

    let allResults = [];
    if (gamesDB.length > 0) {
      gamesDB.forEach((game) => {
        allResults.push({
          id: game.id,
          name: game.name,
          image: game.background_image,
          rating: game.rating,
          platforms: game.platforms,
          genres: game.genres,
        });
      });
    }

    if (gamesAPI.length > 0) {
      allResults.push(...gamesAPI);
    }
    if (allResults.length > 0) {
      allResults = allResults.slice(0, 15);
      return res.status(200).json(allResults);
    }
  } catch (error) {
    return res.status(400).json({ error: "no se encontraron resultados" });
    //return res.status(500).send(error.message);
  }
};

module.exports = {
  getByName,
};

//https://api.rawg.io/api/games?key=2c3d1ac2d79445abad07b687fa48858b&search=gta
