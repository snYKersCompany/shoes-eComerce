const videoGamesRoutes = require("./videogame");
const genreRoute = require("./genre");
const platformRoute = require("./platform");

const { Router } = require("express")
const router = Router();

router.use("/videogames", videoGamesRoutes);
router.use("/genres", genreRoute);
router.use("/platforms", platformRoute);

module.exports = router;
