const { ProductsModel } = require('../../models/ModelsDB');

const getProducts = async (_id)=>{
    const products = await ProductsModel.find(_id?{_id}:null)
    return products;
}

//  Cuando se tenga biene definido que tiene que recibir y que se setea por default, agregar comprobaciones
const postProduct = async (dataProduct)=>{
    const product = new ProductsModel(dataProduct)
    return await product.save()
}

module.exports = {
    getProducts,
    postProduct
}

