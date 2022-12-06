const { ProductsModel } = require('../../models/ModelsDB');

const getProducts = async (_id)=>{
    const products = await ProductsModel.find(_id?{_id}:null)
    return products;
}

module.exports = {
    getProducts
}

