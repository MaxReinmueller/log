const Note = require('../models/Notes');

module.exports = {
	findAll: function(req, res) {
		Note.find(req.query)
			.then(notes => res.json(notes))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Note.findById(req.params.id)
			.then(notes => res.json(notes))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Note.create(req.body)
			.then(newNote => res.json(newNote))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Note.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(note => res.json(note))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Note.findById({ _id: req.params.id })
			.then(Note => Note.remove())
			.then(allNotes => res.json(allNotes))
			.catch(err => res.status(422).json(err));
	}
};