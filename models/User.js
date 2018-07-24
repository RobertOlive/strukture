const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    info: {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    budget: {type: Number, required: true},
    moneyLeft: {type: Number},
    todos: [
        {
            time: {type: String},
            task: {type: String},
            cost: {type: String},
            location: {type: String}
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;