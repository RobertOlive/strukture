const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.User
            .create({info: {username: req.body.username, password: req.body.password}, budget: req.body.budget, moneyLeft: req.body.budget})
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
    updateBudget: (req, res) => {
        db.User
            .findByIdAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateTodos: (req, res) => {
        console.log("getting to todos", req.body)
        db.User
            .findOneAndUpdate({info: req.body.info}, {$push: {todos: req.body.todo}, $min: {moneyLeft: req.body.moneyLeft}}, {new: true})
            .then(dbModel => {
                console.log(dbModel);
                return res.json(dbModel);
            })
            .catch(err=> console.log(err));
    }
}