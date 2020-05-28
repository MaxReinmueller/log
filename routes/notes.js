const router = require('express').Router();
const noteController = require('../controllers/noteController');

router
	.route('/')
	.get(noteController.findAll)
	.post(noteController.create);

router
	.route('/:id')
	.get(noteController.findById)
	.put(noteController.update)
	.delete(noteController.remove);

module.exports = router;