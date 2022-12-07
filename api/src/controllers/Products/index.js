const { ProductsModel } = require('../../models/ModelsDB');

const getProducts = async (_id)=>{
    //  Verificar que existe un producto con ese _id
    const products = await ProductsModel.find(_id?{_id}:null)
    return products;
}

//  Cuando se tenga bien definido que tiene que recibir y que se setea por default, agregar comprobaciones
const postProduct = async (dataProduct)=>{
    const product = new ProductsModel(dataProduct)
    return await product.save()
}

//  Recibe la data que queramos actualizar y el id del producto 
const putProductById = async (updateData, _id)=>{
    //  verificar que alla un producto con ese id (reutilizar getProducts(_id))
    //  Verificar que NO ALLA NINGUN DATO QUE NO ESTE EN EL MODELO (o con una ruta equivocada)
    return await ProductsModel.updateOne({_id},{
        $set:updateData
    })
}

module.exports = {
    getProducts,
    postProduct,
    putProductById
}

