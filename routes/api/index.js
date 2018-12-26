const router = require("express").Router()
const booksController = require("../../controllers/booksController")
const axios = require('axios')
// should hit api routes here

router.route("/")
  .get((req, res) => {
    console.log(req.params)
    axios.get('https://www.googleapis.com/books/v1/volumes')
      .then(r => {
        console.log(r)
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
