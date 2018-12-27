const router = require("express").Router()
const booksController = require("../../controllers/booksController")
const axios = require('axios')

// should hit api routes here
router.route("/")
  .get((req, res) => {
    console.log(req.query.q)
    axios.get('https://www.googleapis.com/books/v1/volumes', {params: {q: req.query.q}})
      .then(r => {
        console.log(r.data)
      })
      .catch(e => {
        console.log(e)
      })
  })

// Matches with "/api/books"


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove)

module.exports = router
