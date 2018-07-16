const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/strukture"
);

const userSeed = [
    {
        info: {
            username: "robbieroberto1",
            password: "password1"
        },
        budget: 1700,
        todos: [
            {
                time: new Date(),
                task: "go to the grocery store1",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store2",
                cost: 5,
                location: "Wal-mart"
            },            
            {
                time: new Date(),
                task: "go to the grocery store3",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store4",
                cost: 5,
                location: "Wal-mart"
            }
        ]
    },
    {
        info: {
            username: "robbieroberto2",
            password: "password2"
        },
        budget: 1800,
        todos: [
            {
                time: new Date(),
                task: "go to the grocery store1",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store2",
                cost: 5,
                location: "Wal-mart"
            },            
            {
                time: new Date(),
                task: "go to the grocery store3",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store4",
                cost: 5,
                location: "Wal-mart"
            }
        ]
    },
    {
        info: {
            username: "robbieroberto3",
            password: "password3"
        },
        budget: 1900,
        todos: [
            {
                time: new Date(),
                task: "go to the grocery store1",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store2",
                cost: 5,
                location: "Wal-mart"
            },            
            {
                time: new Date(),
                task: "go to the grocery store3",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store4",
                cost: 5,
                location: "Wal-mart"
            }
        ]
    },
    {
        info: {
            username: "robbieroberto4",
            password: "password4"
        },
        budget: 2000,
        todos: [
            {
                time: new Date(),
                task: "go to the grocery store1",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store2",
                cost: 5,
                location: "Wal-mart"
            },            
            {
                time: new Date(),
                task: "go to the grocery store3",
                cost: 5,
                location: "Wal-mart"
            },
            {
                time: new Date(),
                task: "go to the grocery store4",
                cost: 5,
                location: "Wal-mart"
            }
        ]
    },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });