const { ProductsModel } = require('../../models/ModelsDB');
const mongoose = require('mongoose');
const { fileURLToPath } = require('url');
const ObjectId = mongoose.Types.ObjectId;

const getProducts = async ({rating, search, category, gender, priceMin, priceMax, orderBy, brand})=>{
    let parameters = {}
    if(rating) parameters.rating = rating
    if(category) parameters.category = category
    if(gender) parameters.gender = gender
    if(brand) parameters.brand = brand
    if(priceMin) parameters.price = {$gte:parseInt(priceMin)}
    if(priceMax) parameters.price = {...parameters.price, $lte:parseInt(priceMax)}
    if(search) parameters.name = {$regex:`(?i)${search}(?-i)`}
    
    let sort = null
    if(orderBy) sort = JSON.parse(orderBy)

    const products = await ProductsModel.find(parameters).sort(sort)
    return products; 
}

const getProductsById = async (_id)=>{

    const products = await ProductsModel.aggregate([
        { $match: {_id:ObjectId(_id)} },
        {
        $lookup:{
            from: "reviews",
            localField: "reviews",
            foreignField: "_id",
            as: "reviews"
            }
        }
    ])

    return products;
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

async function saleProducts (products){
    const promisedProducts = products.map( product => {
        const updateProduct = ProductsModel.updateOne(
            { _id:product.id },
            { $inc:{
                [`stock.${product.size}`]: -1*product.count,
                "sales": product.count
            }}
        )
        return updateProduct;
    })
    await Promise.all(promisedProducts)

    let findProducts = products.map( product => ProductsModel.findOne({
        _id:product.id, 
        [`stock.${product.size}`]:{$lt:0}
    }) )
    findProducts = await Promise.all(findProducts)
    
    const validateStock = findProducts.find(prods => prods !== null)

    if(validateStock) {
        products.forEach( async product => {
            const updateProduct = await ProductsModel.updateOne(
                { _id:product.id },
                {
                    $inc:{
                        [`stock.${product.size}`]: product.count,
                        "sales": -1*product.count
                    }
                }
            )
            return updateProduct;
        })
        // AGREGAR UN ERROR PARA CUANDO ALLA PRODUCTOS REPETIDOS
    }
    console.log(!validateStock)
    return  !validateStock
}

// const products = [{
//     "id": "63972933f60a0fb9ec9dfe48",
//     "name": "Air Jordan 4",
//     "description": "<p>Releasing in January 2019, the Air Jordan 4 Retro ‘Laser’ celebrates the venerable silhouette’s 30th anniversary. Laser-etched designs are nothing new for the Air Jordan 4, and this iteration showcases the embellishments in subtle tonal fashion on a full-grain black leather upper. Contrasting white appears on the Jumpman logos that adorn the heel and tongue tag, while a gum rubber outsole delivers grippy traction underfoot.</p>\n",
//     "img": "https://image.goat.com/750/attachments/product_template_pictures/images/018/071/547/original/479524_00.png.png",
//     "size": "9",
//     "idAux": "63972933f60a0fb9ec9dfe486",
//     "price": 67,
//     "count": 10,
//     "totalPrice": 938
// },
// {
//     "id": "63972933f60a0fb9ec9dfe48",
//     "name": "Air Jordan 4",
//     "description": "<p>Releasing in January 2019, the Air Jordan 4 Retro ‘Laser’ celebrates the venerable silhouette’s 30th anniversary. Laser-etched designs are nothing new for the Air Jordan 4, and this iteration showcases the embellishments in subtle tonal fashion on a full-grain black leather upper. Contrasting white appears on the Jumpman logos that adorn the heel and tongue tag, while a gum rubber outsole delivers grippy traction underfoot.</p>\n",
//     "img": "https://image.goat.com/750/attachments/product_template_pictures/images/018/071/547/original/479524_00.png.png",
//     "size": "7",
//     "idAux": "63972933f60a0fb9ec9dfe486",
//     "price": 67,
//     "count": 10,
//     "totalPrice": 938
// }
// ]

// saleProducts(products)

module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProductById,
    deleteProductById,
    saleProducts
}

