const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Users");
const {
  verifyToken,
  isAdmin,
  checkRolesExisted,
  checkDuplicated,
} = require("../middlewares");

router.get("/", async (req, res) => {
  try {
    const { orderSearch } = req.query;

    console.log('orderSearch req.query', orderSearch)

    const arg = orderSearch ? JSON.parse(orderSearch) : {}
    const users = await controllers.listUsers(arg);

    console.log('esto es users en controllers', users)
    
    return res.status(200).json({ users: users });
  } catch (error) {
    next();
  }
});
//middlewares of postUser: [verifyToken, isAdmin, checkRolesExisted, checkDuplicated]
router.post("/", async (req, res) => {
  try {
    const { uid, email, username, roles } = req.body;
    const message = await controllers.addUser(uid, email, username, roles);
    return res.status(201).json(message);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await controllers.findUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/dashboard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await controllers.getUserDashboard(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const message = await controllers.deleteUser(id);
    return res.status(200).json(message);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const message = await controllers.modifyUser({id, ...data});
    return res.status(200).json(message);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/addFavorite/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    const user = await controllers.addFavoriteProducts(id, favorite);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/deleteFavorite/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    const user = await controllers.deleteFavoriteProducts(id, favorite);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { favourite } = req.body;
    const message = await controllers.postFavourites(id, favourite);
    return res.status(200).json(message);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/data/json", async (req, res) => {
  let { users } = req.body;
  try {
    const message = await controllers.postUsers(users);
    return res.status(200).json(message);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
