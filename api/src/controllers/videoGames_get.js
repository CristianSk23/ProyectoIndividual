const axios = require("axios");
const URL = `https://api.rawg.io/api/games?key=2c3d1ac2d79445abad07b687fa48858b&page=1`;
const { Videogame } = require("../db");

const getGames = async (req, res) => {
  try {
    const {data} = await axios.get(URL);
    if (data.results.length > 0) {
      const games = data.results;
      return res.status(200).json(games);
    }
    return res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getGames,
};
