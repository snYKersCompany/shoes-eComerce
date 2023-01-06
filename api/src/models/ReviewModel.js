const mongoose = require("mongoose")

const ReviewSchema = mongoose.Schema({
    _idProduct:{
        ref:"products",
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    _idUser:{
        ref:"users",
        type:mongoose.Schema.Types.String,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    description:{
        type: String,
        default:""
    }
})
const ReviewModel = mongoose.model("reviews", ReviewSchema)

module.exports = { ReviewModel }
