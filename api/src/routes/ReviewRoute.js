const express = require('express');
const { getReviews, postReviews, getReview, putReview, deleteReview } = require('../controllers/Reviews');
const router = express.Router()

router.get('/', getReviews)


router.get('/:_id', getReview)




router.post('/', postReviews)

router.put('/:_id', putReview)

router.delete('/:id', deleteReview)


module.exports = router;