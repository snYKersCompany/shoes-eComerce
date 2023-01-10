const express = require('express');
const { getReviews, postReviews, getReview, putReview, deleteReview, getReviewUser, getReviewProduct, deleteReviewProduct, deleteReviewUser } = require('../controllers/Reviews');
const router = express.Router()

router.get('/', getReviews)

router.get('/product/:_id', getReviewProduct)

router.get('/user/:_id', getReviewUser)

router.get('/:_id', getReview)

router.post('/', postReviews)

router.put('/:_id', putReview)

router.delete('/product/:_id', deleteReviewProduct)

router.delete('/user/:_id', deleteReviewUser)

router.delete('/unique/:id', deleteReview)

module.exports = router;