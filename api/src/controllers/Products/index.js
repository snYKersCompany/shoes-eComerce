const { Product } = require('../../db');

module.exports = {
    listProducts: async () => {
        const products = await Product.findAll();
        return products;
    }
}