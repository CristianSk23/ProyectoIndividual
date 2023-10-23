const axios = require("axios");
const { Videogame } = require("../db");

const gameDetail = async (req, res) => {
  const id = req.params.value;
  try {
    console.log("Este es el id que llega por params " + id);
    const URL = `https://api.rawg.io/api/games/${id}?key=2c3d1ac2d79445abad07b687fa48858b`;

    const { data } = await axios.get(URL);
    if (data) {
      const game = {
        id,
        name: data.name,
        description: data.description,
        rating: data.rating,
        platforms: data.platforms,
        genres: data.genres
      };
      return res.status(200).json(game);
    }

    const gameDb = await Videogame.findById(id);
    if (gameDb) {
      return res.status(200).json(gameDb);
    }
  } catch (error) {
    console.log("No encontró el juego con el ID: " + id);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  gameDetail,
};
