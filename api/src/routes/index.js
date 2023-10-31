const { Router } = require("express");
const { getGames } = require("../controllers/videoGames_get");
const { gameDetail } = require("../controllers/detailVideoGame");
const { getByName } = require("../controllers/videoGamesName");
const { postGame } = require("../controllers/postVideogames");
const { getGenres } = require("../controllers/getGenres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/videogames", getGames);
router.get("/videogames/name?", getByName);
router.get("/videogames/:idVideogame", gameDetail);
router.get("/genres", getGenres);
router.post("/videogames", postGame);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
