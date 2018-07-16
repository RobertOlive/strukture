const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.Todo
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Todo
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Todo
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

