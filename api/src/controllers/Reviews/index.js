const { ReviewModel, ProductsModel, UsersModel } = require("../../models/ModelsDB");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const getReview = async (req, res)=>{
    try {
        const { _id } = req.params;

        const review = await ReviewModel.findById(_id)

        return res.status(200).json(review);
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
} 

const getReviewProduct = async (req, res)=>{
    try {
        const { _id } = req.params;
        const review = await ReviewModel.aggregate([
            {$match:{_idProduct:ObjectId(_id)}},
            {$lookup:{
                from:'users',
                localField:'_idUser',
                foreignField:'_id',
                as:'user'
            }},
            // {$unionWith:'$user'}
        ])
        // const review = await ReviewModel.find({_idProduct:_id})

        return res.status(200).json(review);
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
} 

const getReviewUser = async (req, res)=>{
    try {
        const { _id } = req.params;

        const review = await ReviewModel.aggregate([
            {$match:{_idUser:_id}},
            {$lookup:{
                from:'products',
                localField:'_idProduct',
                foreignField:'_id',
                as:'product'
            }},
            // {$unionWith:'user'}
        ])
        // const review = await ReviewModel.find({_idUser:_id})

        return res.status(200).json(review);
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
} 

const getReviews = async (req, res)=>{
    try {
        const allReviews = await ReviewModel.find()

        return res.status(200).json(allReviews);
    } catch (error) {
        return res.status(404).json({message:error.message})  
    }
}

const postReviews = async (req, res)=>{
    try {
        const { _idProduct, _idUser, rating, description } = req.body;
        if(!_idProduct || !_idUser || !rating) throw new Error("Faltan Datos Importantes")

        let parameters = {_idProduct, _idUser, rating}
        if(description) parameters.description = description;

        const newReview = new ReviewModel(parameters)

        await ProductsModel.updateOne({_id:_idProduct},{
            $addToSet:{reviews:newReview._id}
        })
        await UsersModel.updateOne({_id:_idUser},{
            $addToSet:{reviews:newReview._id}
        })

        await newReview.save()

        return res.status(200).json(newReview)
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
}

const putReview = async (req, res)=>{
    try {
        const {_id} = req.params
        const { rating, description} = req.body
        
        let parameters = {}
        if(rating) parameters.rating = rating
        if(description) parameters.description = description
        const updateReview = await ProductsModel.updateOne({_id},{
            $set:parameters
        })
        return res.status(200).json(updateReview)
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
} 

const deleteReview = async (req, res)=>{
    try {
        const {_id} = req.params;
        const {_idProduct, _idUser} = req.body
        const _idReviews = [_id]
        const deleteReview = await deleteReviews(_idReviews, _idProduct, _idUser)
        // const deleteReview = await ProductsModel.deleteOne({_id})
        return res.status(200).json(deleteReview);
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
}

const deleteReviewProduct = async (req, res)=>{
    try {
        const { _id } = req.params
        const { _idReviews } = req.body
        const _idProduct = [_id]

        console.log(_idReviews)

        const  reviews  = await ReviewModel.find({ _id:{$in:_idReviews} })
        console.table(reviews[0]._doc)
        const _idUser = reviews.map( rev => rev._doc._idUser)
        // const _idProduct = reviews.map( rev => rev._doc._idProduct)
        console.log(_idUser)
        // console.log(_idProduct)

        const deleteReview = await deleteReviews(_idReviews, _idProduct, _idUser)

        // return res.status(200).json(deleteReview);
        return res.status(200).json(reviews);
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}

const deleteReviewUser = async (req, res)=>{
    try {
        const { _id } = req.params
        const { _idReviews } = req.body
        const _idUser = [_id]

        console.log(_idReviews)

        const  reviews  = await ReviewModel.find({ _id:{$in:_idReviews} })
        console.table(reviews[0]._doc)
        // const _idUser = reviews.map( rev => rev._doc._idUser)
        const _idProduct = reviews.map( rev => rev._doc._idProduct)
        // console.log(_idUser)
        // console.log(_idProduct)

        const deleteReview = await deleteReviews(_idReviews, _idProduct, _idUser)

        // return res.status(200).json(deleteReview);
        return res.status(200).json(reviews);
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}

async function deleteReviews (_idReviews, _idProduct, _idUser){

    console.log("products")

    const products = await ProductsModel.updateMany(
        { _id:{$in:_idProduct} },
        {
            $pull:{ reviews:{$in:_idReviews}}
        }
    )
    const users = await UsersModel.updateMany(
        { _id:{$in:_idUser} },
        {
            $pull:{ reviews:{$in:_idReviews}}
        }
    )
    const reviews = await ReviewModel.deleteMany({ _id:{$in:_idReviews} })
    console.log({products, users, reviews})
    return {products, users, reviews}
}

// deleteReviews([new ObjectId("63b750febda1f1cc6e985af6")], ['63972933f60a0fb9ec9dfe52'], ["tFYWKRYSBeNVK2e3UFwXVlzpMiL2"])

module.exports = {
    getReviews,
    getReviewProduct,
    getReviewUser,
    getReview,
    postReviews,
    putReview,
    deleteReview,
    deleteReviewProduct,
    deleteReviewUser,
}
