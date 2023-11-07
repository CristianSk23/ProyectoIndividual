const { Videogame } = require(".././db");
const { Genres } = require(".././db");
const { Op } = require("sequelize");

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

  const existingGame = await Videogame.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  if (existingGame) {
    return res
      .status(400)
      .json({ error: "Ya existe un videojuego con ese nombre" });
  }
  try {
    const newVideoGame = await Videogame.create({
      name,
      description,
      rating,
      platforms,
      released,
      background_image,
    });
    console.log("El videojuego creado sería...", newVideoGame);

    for (const genreData of genres) {
      const { name } = genreData;
      const foundGenres = await Genres.findAll({
        where: { name },
      });

      if (foundGenres) {
        await newVideoGame.addGenre(foundGenres);
      }
    }
    if (newVideoGame) {
      return res.status(201).send("Videojuego creado con éxito");
    }
  } catch (error) {
    return res.status(500).send("No se pudo crear el videojuego");
  }
};

module.exports = {
  postGame,
};

/* const foundGenres = await VideoGame.findOne({
  where: { id: genres.id },
}); */
