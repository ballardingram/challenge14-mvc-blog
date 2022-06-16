// FUNCTIONALITY > ROUTES AND REQUIRED MODELS
const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// ROUTES > FIND ALL COMMENTS
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id'
        ],
        include: [
            {
                model: User,
                as: "user",
                attributes: ['username'],
            },
        ],
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ROUTES > POST AND COMMENT BY SINGLE ID
router.get("/:id", (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id,
        },
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id'
        ],
        include: [
            {
                model:User,
                as: 'user',
                attributes: ['username'],
            },
        ],
    })
    .then((dbCommentData) => {
        if (!dbCommentData) {
            res.status(404).json({message: 'No comment with this ID.'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ROUTES > POST COMMENT BASED ON USER ID AND POST ID
router.post('/', (req,res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
    })
    .then((dbCommentData) => {
        res.json(dbCommentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ROUTES > DELETE COMMENT
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ messge: 'No comment found with this ID!' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;