const Cafe = require('../models/cafe');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    const cafe = await Cafe.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    cafe.reviews.push(review);
    await review.save();
    await cafe.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/cafes/${cafe._id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Cafe.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review')
    res.redirect(`/cafes/${id}`);
}
