const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route to get all posts
router.get('/posts', postController.getAllPosts);

// Route to create a new post
router.post('/posts', postController.createPost);

// Route to update an existing post
router.put('/posts/:id', postController.updatePost);

// Route to delete a post
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
