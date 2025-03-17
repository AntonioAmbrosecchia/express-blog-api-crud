const express = require('express');
const router = express.Router();
const { index, show, create, destroy } = require('../controllers/postsController');

router.get('/posts', index);
router.get('/posts/:id', show);
router.post('/posts', create);
router.delete('/posts/:id', destroy);

module.exports = router;