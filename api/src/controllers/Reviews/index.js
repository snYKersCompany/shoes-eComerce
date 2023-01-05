const { ReviewModel, ProductsModel, UsersModel } = require("../../models/ModelsDB");


const getReview = async (req, res)=>{
    try {
        const { _id } = req.params;

        const review = ReviewModel.findById(_id)

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
    getReview,
    postReviews,
    putReview,
    deleteReview,
}
