const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    login: (req, res) => {
        console.log("getting here", req.query)
        db.User
            .find({info: {username: req.query.username, password: req.query.password}})
            .then(dbModel => res.json(dbModel))
            .catch(err=> console.log(err));
    },
    update: (req, res) => {
        db.User
            .findByIdAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}