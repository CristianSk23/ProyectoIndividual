const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
/* const { API_KEY } = process.env; */
const getGames = async (req, res) => {
  
  try {
    console.log("LLAMADO DE TODOS LOS JUEGOS");
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=1`;
    const { data } = await axios.get(URL);
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
