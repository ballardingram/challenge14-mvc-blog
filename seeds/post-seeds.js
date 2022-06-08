// FUNCTIONALITY > REQUIRED MODEL IMPORT
const { Post } = require('../models');

// SEEDS > POSTS
const postdata = [
    {
        title: 'What is alpha?',
        post_text: 'https://en.wikipedia.org/wiki/Alpha',
        user_id: 1
    },
    {
        title: 'What is beta?',
        post_text: 'https://en.wikipedia.org/wiki/Beta',
        user_id: 2
    },
    {
        title: 'What is gamma?',
        post_text: 'https://en.wikipedia.org/wiki/Gamma',
        user_id: 3
    },
    {
        title: 'What is delta?',
        post_text: 'https://en.wikipedia.org/wiki/Delta_(letter)',
        user_id: 4
    },
    {
        title: 'What is epsilon?',
        post_text: 'https://en.wikipedia.org/wiki/Epsilon',
        user_id: 5
    },
    {
        title: 'What is zeta?',
        post_text: 'https://en.wikipedia.org/wiki/Zeta',
        user_id: 6
    },
    {
        title: 'What is eta?',
        post_text: 'https://en.wikipedia.org/wiki/Eta',
        user_id: 7
    },
    {
        title: 'What is theta?',
        post_text: 'https://en.wikipedia.org/wiki/Theta',
        user_id: 8
    },
    {
        title: 'What is iota?',
        post_text: 'https://en.wikipedia.org/wiki/Iota',
        user_id: 9
    },
    {
        title: 'What is kappa?',
        post_text: 'https://en.wikipedia.org/wiki/Kappa',
        user_id: 10
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts