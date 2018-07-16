const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    login: (req, res) => {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    update: (req, res) => {
        db.User
            .findByIdAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}