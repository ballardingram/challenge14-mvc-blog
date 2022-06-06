// FUNCTIONALITY > EXTERNAL PACKAGES AND MODELS
const { Comment } = require('../models');


// SEEDS > COMMENTS
const commentdata = [
    {
        comment_text: 'Alpha is the best!',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Beta is the best!',
        user_id: 9,
        post_id: 2
    },
    {
        comment_text: 'Gamma is the best!',
        user_id: 8,
        post_id: 3
    },
    {
        comment_text: 'Delta is the best!',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'Epsilon is the best!',
        user_id: 6,
        post_id: 5
    },
    {
        comment_text: 'Zeta is the best!',
        user_id: 5,
        post_id: 6
    },
    {
        comment_text: 'Eta is the best!',
        user_id: 4,
        post_id: 7
    },
    {
        comment_text: 'Theta is the best!',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Iota is the best!',
        user_id: 2,
        post_id: 9
    },
    {
        comment_text: 'Kappa is the best!',
        user_id: 1,
        post_id: 10
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);\
module.exports = seedComments;