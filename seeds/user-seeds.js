// FUNCTIONALITY > EXTERNAL PACKAGES AND MODELS
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// SEEDS > USERS
const userdata = [
    {
        username: 'alpha1',
        email: 'alpha1@email.com',
        password: 'password123'
    },
    {
        username: 'beta2',
        email: 'beta2@email.com',
        password: 'password123'
    },
    {
        username: 'gamma3',
        email: 'gamma3@email.com',
        password: 'password123'
    },
    {
        username: 'delta4',
        email: 'delta4@email.com',
        password: 'password123'
    },
    {
        username: 'epsilon5',
        email: 'epsilon5@email.com',
        password: 'password123'
    },
    {
        username: 'zeta6',
        email: 'zeta6@email.com',
        password: 'password123'
    },
    {
        username: 'eta7',
        email: 'eta7@email.com',
        password: 'password123'
    },
    {
        username: 'theta8',
        email: 'theta8@email.com',
        password: 'password123'
    },
    {
        username: 'iota9',
        email: 'iota9@email.com',
        password: 'password123'
    },
    {
        username: 'kappa10',
        email: 'kappa10@email.com',
        password: 'password123'
    },
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;