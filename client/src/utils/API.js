import axios from "axios"

export default {
  //  Searches API for book
  searchBook: function (query) {
    return axios.get("/api/", { params: { q: query } })
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id)
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id)
  // }
  // // Saves a book to the database
  // searchBook: function(bookData) {
  //   return axios.get("/api/books/:id", bookData)
  // }
}
