const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// Import other route files here...

// Use the imported routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// Use other routes...

module.exports = router;
