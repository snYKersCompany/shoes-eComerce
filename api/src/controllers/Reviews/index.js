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

        const deleteReview = await ProductsModel.deleteOne({_id})
        return res.status(200).json(deleteReview);
    } catch (error) {
        return res.status(404).json({message:error.message}) 
    }
}

module.exports = {
    getReviews,
    getReviewProduct,
    getReviewUser,
    getReview,
    postReviews,
    putReview,
    deleteReview,
}
