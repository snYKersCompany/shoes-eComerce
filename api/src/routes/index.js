const productMiddleware = require('./Product');

const { Router } = require("express")
const router = Router();

router.use("/products", productMiddleware);

module.exports = router;