const router = require('express').Router();
const bookRoutes = require('./books');
const noteRoutes = require('./notes');
const path = require('path');

// API routes
router.use('/api/books', bookRoutes);
router.use('/api/notes', noteRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;