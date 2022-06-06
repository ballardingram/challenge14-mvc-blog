// FUNCATIONALITY > OTHER SEED FILES
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('-----SEED ALL-----');
    await seedUsers();
    console.log('-----SEED USERS-----');
    await seedPosts();
    console.log('-----SEED POSTS-----');
    await seedComments();
    console.log('-----SEED COMMENTS-----');
    process.exit(0);
};

seedAll();