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
    
    let sort = {rating:-1}
    if(orderBy) sort = JSON.parse(orderBy)

    // const products = await ProductsModel.find(parameters).sort(sort)

    const products = await ProductsModel.aggregate([
        { $match: parameters },
        {
        $lookup:{
            from: "reviews",
            localField: "reviews",
            foreignField: "_id",
            as: "productReviews"
            }
        },
        { $project: {
            sales:1,
            name:1,
            brand:1,
            category:1,
            collection:1,
            color:1,
            gender:1,
            card_picture:1,
            detail_picture:1,
            original_picture:1,
            release_date:1,
            price:1,
            range:1,
            description:1,
            stock:1,
            reviews:1,
            rating:1,
            rating:{
                $cond:{
                    if:{
                        $eq:[{$avg:'$productReviews.rating'},null]},
                        then:0,else:{$avg:'$productReviews.rating'}}}
        }},
        
        {$sort:sort},
    ])

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
            as: "productReviews"
            }
        },
        { $project: {
            sales:1,
            name:1,
            brand:1,
            category:1,
            collection:1,
            color:1,
            gender:1,
            card_picture:1,
            detail_picture:1,
            original_picture:1,
            release_date:1,
            price:1,
            range:1,
            description:1,
            stock:1,
            reviews:1,
            productReviews:1,
            rating:1
            // rating:{$avg:'$productReviews.rating'}
        }},
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
    console.log("saleProducts")
    const promisedProducts = products.map( product => {
        console.log(product)
        const updateProduct = ProductsModel.updateOne(
            { _id:product.id },
            { $inc:{
                [`stock.${product.size}`]: -1*product.count,
                "sales": product.count
            }}
        )
        console.log(updateProduct)
        return updateProduct;
    })
    console.log("promisedProducts")
    const algo = await Promise.all(promisedProducts)
    
    console.log("promisedProducts")
    let findProducts = products.map( product => ProductsModel.findOne({
        _id:product.id, 
        [`stock.${product.size}`]:{$lt:0}
    }) )
    console.log("findProducts")
    findProducts = await Promise.all(findProducts)
    const validateStock = findProducts.find(prods => prods !== null)
    console.log(findProducts)
    if(validateStock) {
        console.log("findProducts")
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
// },
// ]

// const products = [
//     {
//         "id": "63972933f60a0fb9ec9dfe4e",
//         "name": "Air Jordan 12",
//         "description": "<p>The Wmns Air Jordan 12 Retro &#39;Reptile&#39; sneaker draws details from the 1996 classic and elevates them with luxe style additions. This April 2019-released, women&#39;s-exclusive shoe features the AJ12’s original stitching, inspired by the Rising Sun Flag of Japan. Its black leather upper is laden with exotic reptile-inspired texture and embellished with gold accents. This edition is completed with classic Zoom cushioning and sections of herringbone tread.</p>\n",
//         "img": "https://image.goat.com/750/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png",
//         "size": "4,5",
//         "idAux": "63972933f60a0fb9ec9dfe4e4.5",
//         "price": 63,
//         "count": 2,
//         "totalPrice": 126
//     }
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

