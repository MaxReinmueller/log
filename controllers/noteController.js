const Book = require('../models/Notes');

module.exports = {
	findAll: function(req, res) {
		Book.find(req.query)
			.then(notes => res.json(notes))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Book.findById(req.params.id)
			.then(notes => res.json(notes))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Book.create(req.body)
			.then(newNote => res.json(newNote))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(note => res.json(note))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Book.findById({ _id: req.params.id })
			.then(book => book.remove())
			.then(allNotes => res.json(allNotes))
			.catch(err => res.status(422).json(err));
	}
};