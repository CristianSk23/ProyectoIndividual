const { Videogame } = require(".././db");

const postGame = async (req, res) => {
  const {
    name,
    description,
    rating,
    platforms,
    genres,
    released,
    background_image,
  } = req.body;
  //console.log(name, description, rating, platforms, genres);
  try {
    const newVideoGame = await Videogame.create({
      name,
      description,
      rating,
      platforms,
      genres,
      released,
      background_image,
    });
    if (newVideoGame) {
      return res.status(201).json(newVideoGame);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  postGame,
};
