const axios = require("axios");
const API_KEY = "2c3d1ac2d79445abad07b687fa48858b";
/* const { API_KEY } = process.env; */
const getGames = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    console.log("tendria que llegar el valor de la pagina actual ", page);
    const perPage = 15;
    const startIndex = (page - 1) * perPage;
    console.log("LLAMADO DE TODOS LOS JUEGOS");
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
    console.log("Esta es la URL ", URL);

    /*     const ids = [1, 2, 3, 4, 5];

    const URLS = await Promise.all(
      ids.map(async (id) => {
        const { data } =
         
        return data;
      })
    ); */

    const { data } = await axios.get(URL);
    console.log();
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
      //console.log("Tendrian que llegar los elementos de la API ", games);
      const gameSlice = games.slice(0, 15);
      //console.log(gameSlice);
      
      return res.status(200).json(gameSlice);
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
