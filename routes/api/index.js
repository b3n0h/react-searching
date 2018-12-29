const router = require("express").Router()
const booksController = require("../../controllers/booksController")
const axios = require('axios')

// should hit api routes here
router.route("/")
  .get((req, res) => {
    console.log(req.query.q)
    axios.get('https://www.googleapis.com/books/v1/volumes', {params: {q: req.query.q}})
      .then(r => {
        res.send(r.data.items)
      })
      .catch(e => {
        console.log(e)
      })
  })
  .post(booksController.create)

router.route('/saved')
  .get(booksController.findAll)



module.exports = router
