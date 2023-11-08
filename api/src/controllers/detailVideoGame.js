const axios = require("axios");
const { Videogame, Genres } = require("../db");
const API_KEY = `2c3d1ac2d79445abad07b687fa48858b`;

const gameDetail = async (req, res) => {
  const { idVideogame } = req.params; // Recibimos el ID del params

  const isValidUUIDv4 = (str) => {
    //* Funcion que sirve para validar si el ID ingresado es un ID en formato UUIDV4
    const uuidv4Regex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidv4Regex.test(str);
  };
  try {
    if (isValidUUIDv4(idVideogame)) {
      //* Si es un ID UUIDV4 buscamos en la base de datos
      const gameDb = await Videogame.findByPk(idVideogame, {
        include: Genres,
      });

      if (gameDb) {
        const gameAuxDB = {
          id: gameDb.id,
          name: gameDb.name,
          description: gameDb.description,
          rating: gameDb.rating,
          platforms: gameDb.platforms.map((platform) => platform.name),
          genres: gameDb.genres.map((genre) => genre.dataValues.name),
          released: gameDb.released,
          image: gameDb.background_image,
        };
        return res.status(200).json(gameAuxDB);
      }
    } else {
      //* Si no es un ID UUIDV4 buscamos en la API
      const URL = `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`;
      const { data } = await axios.get(URL);
      if (data) {
        const game = {
          id: data.id,
          name: data.name,
          description: data.description,
          rating: data.rating,
          platforms: data.platforms.map((platform) => platform.platform.name), // Extraer los nombres de las plataformas
          genres: data.genres.map((genre) => genre.name), //Extraer los nombres de los generos
          released: data.released,
          image: data.background_image,
        };
        return res.status(200).json(game);
      }
    }
  } catch (error) {
    return res.status(500).send("no se encontro el Videojuego");
  }
};

module.exports = {
  gameDetail,
};

/* 
   366b3e46-a54c-4d54-9c3b-0bd6af8dc135 
    */
