const express = require('express');
const router = express.Router();
const { index, show, create, update, destroy } = require('../controllers/postsController');

router.get('/posts', index);
router.get('/posts/:id', show);
router.post('/posts', create);
router.put('/posts/:id', update);
router.delete('/posts/:id', destroy);

module.exports = router;