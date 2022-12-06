const ProductsModel = require('../../models/ModelsDB.js');

const listProducts =  async () => {
    const products = await ProductsModel.find();
    return products;
}

module.exports = {
    listProducts
}