import axios from "axios"

export default {
  //  Searches API for book
  searchBook: function (query) {
    return axios.get("/api/", { params: { q: query } })
  },
  // Saves book to database
  saveBook: function (bookData) {
    return axios.post("/api/", bookData)
  },
  // Retrieves saved books from database
  getBooks: function () {
    return axios.get('/api/saved')
  }
}
