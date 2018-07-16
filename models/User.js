const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    info: {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    budget: {type: Number, required: true},
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;