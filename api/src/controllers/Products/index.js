const { Product } = require('../../db');

const listProducts =  async () => {
    const products = await Product.findAll();
    return products;
}

module.exports = {
    listProducts
}