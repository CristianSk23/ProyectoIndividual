const axios = require("axios");
const { Videogame } = require("../db");

const gameDetail = async (req, res) => {
  const { idVideogame } = req.params;
  const isValidUUIDv4 = (str) => {
    const uuidv4Regex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidv4Regex.test(str);
  };
  try {
    if (isValidUUIDv4(idVideogame)) {
      const gameDb = await Videogame.findByPk(idVideogame);
      if (gameDb) {
        return res.status(200).json(gameDb);
      }
    } else {
      const URL = `https://api.rawg.io/api/games/${idVideogame}?key=2c3d1ac2d79445abad07b687fa48858b`;
      const { data } = await axios.get(URL);
      if (data) {
        const game = {
          idVideogame,
          name: data.name,
          description: data.description,
          rating: data.rating,
          platforms: data.platforms,
          genres: data.genres,
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
  
  
  
  
  console.log("Este es el id que llega por params " + idVideogame);
    
    }
  
  
  
  
  
  
  
  
  
  
  
  } */
