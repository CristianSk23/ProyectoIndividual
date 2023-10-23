const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
const getByName = async (req, res) => {
  try {

    const searchTerm = req.query.name
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`;
    const { data } = await axios.get(URL);
  
    if (data) {
      const games = data.results;
      return res.status(200).json(games);
    }
   
  } catch (error) {}
};

module.exports = {
  getByName,
};

//https://api.rawg.io/api/games?key=2c3d1ac2d79445abad07b687fa48858b&search=gta
