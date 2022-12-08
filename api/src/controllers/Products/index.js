const { ProductsModel } = require('../../models/ModelsDB');

const getProducts = async ({rating})=>{
    let parameters = {}
    if(rating) parameters.rating = rating
    const products = await ProductsModel.find(parameters)
    return products; 
}

const getProductsById = async (_id)=>{
    try {
        const products = await ProductsModel.find(_id?{_id}:null)
        return products;
    } catch (error) {
        throw new Error(`The user with an id ${_id} was not found in the database`);
    }
}

const postProduct = async (dataProduct)=>{
    const {
        name,
        brand,
        category,
        color,
        gender,
        stock,
        card_picture,
        detail_picture,
        original_picture,
        release_date,
        price,
        description} = dataProduct;
    if(!name || !brand || !stock || !card_picture || !detail_picture || !price) throw new Error('important data is missing')
    
    let parameters = {
        name,
        brand,
        stock,
        card_picture,
        detail_picture,
        price
    }
    if(category) parameters.category = category;
    if(color) parameters.color = color;
    if(gender) parameters.gender = gender;
    if(original_picture) parameters.original_picture = original_picture;
    if(release_date) parameters.release_date = release_date;
    if(description) parameters.description = description;
    const product = new ProductsModel(parameters)
    return await product.save()
}

//  Recibe la data que queramos actualizar y el id del producto 
const putProductById = async (updateData, _id)=>{
    await getProducts(_id)

    const {name, brand, category, color, gender, stock, card_picture, detail_picture, original_picture, release_date, price, description} = updateData;

    let parameters = {}
    if(name) parameters.name = name;
    if(brand) parameters.brand = brand;
    if(stock) parameters.stock = stock;
    if(card_picture) parameters.card_picture = card_picture;
    if(card_picture) parameters.card_picture = card_picture;
    if(detail_picture) parameters.detail_picture = detail_picture;
    if(price) parameters.price = price;
    if(category) parameters.category = category;
    if(color) parameters.color = color;
    if(gender) parameters.gender = gender;
    if(original_picture) parameters.original_picture = original_picture;
    if(release_date) parameters.release_date = release_date;
    if(description) parameters.description = description;

    const product = await ProductsModel.updateOne({_id},{
        $set:parameters
    })
    return product
}

const deleteProductById = async (_id)=>{
    await getProducts(_id)
    
    const product = await ProductsModel.deleteOne({_id})
    return product
}

module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProductById,
    deleteProductById
}

