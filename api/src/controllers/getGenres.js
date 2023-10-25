const axios = require("axios");
const { Genres } = require("../db");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenres = async (req, res) => {
  try {
    const { data } = await axios.get(URL);
    const genresApi = data.results;
    if (genresApi) {
      genresApi.forEach(async (element) => {
        const genres = await Genres.findOrCreate({
          where: { id: element.id, name: element.name },
        });
        console.log("Busque el elemento y lo cree con el ID: " + element.id);
      });
      return res.status(200).json(genresApi);
    }
  } catch (error) {
    return res.status(500).send("No hay generos");
  }
};

module.exports = {
  getGenres,
};
