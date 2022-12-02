const axios = require("axios");
const { conn, Videogames, Genres, Platforms } = require("../db");
const { API_KEY } = process.env;
const { Op } = require("sequelize");

function buscadora(arr, palabra) {
  if (palabra.length > 0) {
    for (var i = 0; i < palabra.length; i++) {
      // 				   PROPIEDAD QUE QUIERA FILTRAR
      //                        |
      // 						            V	
      arr = arr.filter(e => e.name[i]?.toUpperCase() === palabra[i].toUpperCase())
    }
    return arr
  }
}

var Cache = [] // Para no estar haciendo pedidos a la api todo el tiempo, lo hago 1 vez y listo
var cantidadGamesDb = ""
var gamesAPI = []

/////-----TRAER TODOS LOS VIDEOJUEGOS-----/////
const getVideogames = async (req, res) => {
  try {
    var { name } = req.query

    if (!Cache.length || await Videogames.count() !== cantidadGamesDb) {
      cantidadGamesDb = await Videogames.count()
      var gamesDB = await Videogames.findAll({//busca todos los juegos con esos atributos
        attributes: ["id", "name", "background_image", "rating", "released"],
        include: [{
          attributes: ["name"],
          model: Genres
        },
        {
          attributes: ["name"],
          model: Platforms
        }
        ]
      })
      gamesDB = gamesDB.map(e => { return { id: e.id, name: e.name, rating: e.rating, release: e.released, background_image: e.background_image, genres: e.genres.map(genre => genre.name), platforms: e.platforms.map(plat => plat.name) } })
      //
      let i = 1
      if (!Cache.length) {
        //console.log("Cargo los games de la api, osea que es el primer request si o si");
        while (i < 6) {
          await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
            .then(async (res) => {
              var results = res.data.results
              for (let j = 0; j < results.length; j++) {
                for (let k = 0; k < results[j].platforms.length; k++) {
                  await Platforms.findOrCreate({
                    where: { name: results[j].platforms[k].platform.name }
                  })
                }
                gamesAPI.push({ id: results[j].id, name: results[j].name, rating: results[j].rating, released: results[j].released, background_image: results[j].background_image, genres: results[j].genres.map(e => e.name), platforms: results[j].platforms.map(p => p.platform.name) })
              }
            }
            )
          i++
        }
      }
      Cache = [...gamesDB, ...gamesAPI]
    }
    if (!name) {
      res.json([...Cache])
    } else {
      res.send(buscadora(Cache, name))
    }
  } catch (e) {
    res.send(e)
  }
}

/////-----TRAER VIDEOJUEGOS POR ID-----/////
const getGameID = async (req, res) => {
  // const id = req.params.id   es lo mismo
  const { id } = req.params
  try {
    if (id.includes('-')) {
      const gameDb = await Videogames.findOne({
        where: { id },
        include: [Genres, Platforms],
      });
      return res.json(gameDb);
    } else {
      const gameApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      let { name, background_image, genres, description, released, rating, platforms } = gameApi.data;
      // genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
      platforms = platforms.map(p => p.platform); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
      return res.json({
        id,
        name,
        background_image,
        genres,
        platforms,
        rating,
        released,
        description,
      })
    }
  } catch (error) {
    res.status(404).json({ error: 'Id not found 😕' });
  }
}

/////-----POSTEAR VIDEOJUEGO-----/////
const postGame = async (req, res) => {
  let {
    name,
    description,
    background_image,
    released,
    rating,
    genres,
    platforms,
  } = req.body;

  try {
    const gameCreated = await Videogames.create({
      name,
      description,
      background_image,
      released,
      rating
    })

    const gameGenre = await Genres.findAll({
      where: {
        name: genres
      }
    })
    const gamePlatform = await Platforms.findAll({
      where: {
        name: platforms
      }
    })

    await gameCreated.addPlatform(GgamePlatform)
    await gameCreated.addGenre(gameenre)

    res.send(`Game Created, its id is ${gameCreated.id}`)
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getVideogames,
  // getNamesGames,
  getGameID,
  postGame,
};
