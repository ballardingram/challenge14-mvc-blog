// FUNCTIONALITY > MODEL IMPORTS
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// ASSOCIATION > USER HAS MANY POST
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// ASSOCIATION > POST BELONGS TO USER
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// ASSOCIATION > COMMENT BELONGS TO USER
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// ASSOCIATION > COMMENT BELONGS TO POST
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// ASSOCIATION > USER HAS MANY COMMENTS
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// ASSOCIATION POST HAS MANY COMMENTS
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };