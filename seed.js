const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create({
    title: "1984",
    description: "big brother is watching you in this dystopian nightmare",
    status: false,
  });
  console.log("Logged a new book");

  mongoose.disconnect();
}

seed();
