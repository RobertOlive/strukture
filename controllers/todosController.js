const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Todo
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}