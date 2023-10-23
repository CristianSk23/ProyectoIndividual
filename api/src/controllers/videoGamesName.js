const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
const { Videogame } = require("../db");

const getByName = async (req, res) => {
  try {
    const searchTerm = req.query.name;
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`;

 /*    const gamesDB = await Videogame.findAll({
      where: {
        name: { [Op.iLike]: `%${searchTerm}%` },
      },
    }); */
    const { data } = await axios.get(URL); //* Para buscar lo enviado por query en la API
    //console.log(data.results);
    const gamesAPI = data.results.map((game) => ({
      id: game.id,
      name: game.name,
      description: game.description,
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres,
    }));

    if (gamesAPI) {
      console.log("hay algo en la base de datos y la api");
      const allResults = [...gamesAPI]; //...gamesDB
      if (allResults.length > 1) {
        allResults.slice(0, 15);
        return res.status(200).json(allResults);
      }
    } //* &&
  } catch (error) {
    return res.status(400).json({ error: "no se encontraron resultados" });
    //return res.status(500).send(error.message);
  }
};

module.exports = {
  getByName,
};

//https://api.rawg.io/api/games?key=2c3d1ac2d79445abad07b687fa48858b&search=gta
