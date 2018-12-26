const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String, 
    urequired: true
  },
  image: String,
  url: String,
  synopsis: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
