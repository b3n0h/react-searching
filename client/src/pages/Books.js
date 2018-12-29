import React, { Component } from "react"
import API from "../utils/API"
import Content from '../components/Content'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {

  },
  flex: {
    display: 'flex',
    alignItem: 'center',
    marginTop: 20
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
})

class Books extends Component {

  state = {
    books: [],
    query: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.query)
    API.searchBook(this.state.query.split(' ').join('+'))
      .then(r => {
        let books = []
        r.data.forEach(elem => {
          books.push({
            title: elem.volumeInfo.title,
            authors: elem.volumeInfo.authors ? elem.volumeInfo.authors.join(', ') : '',
            description: elem.volumeInfo.description,
            image: elem.volumeInfo.imageLinks.thumbnail,
            link: elem.volumeInfo.infoLink
          })
        })
        this.setState({ books: books })
      })
      .catch(e => {
        console.log(e)
      })
  }

  handleSave = index => {
    let bookData = {
      title: this.state.books[index].title,
      authors: this.state.books[index].authors,
      description: this.state.books[index].description,
      image: this.state.books[index].image,
      link: this.state.books[index].link
    }
    API.saveBook(bookData)
  }

  render() {

    const { classes } = this.props

    return (
      <React.Fragment>
        <Grid container justify='center'>
          <Grid item>
            <form className={classes.flex}>
              <TextField
                id="standard-search"
                label="Search Books"
                type="search"
                name="query"
                placeholder="Title (required)"
                value={this.state.query}
                onChange={this.handleInputChange}
                />
                <Button type='submit' variant="contained" className={classes.button}
                  onClick={this.handleFormSubmit}
                  >
                  Find Book
                </Button>
            </form>
          </Grid >
        </Grid>
        <Grid container justify='center'>
          <Content
            books={this.state.books}
            handleSave={this.handleSave}
            />
        </Grid>
      </React.Fragment>
    )
  }
}

Books.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Books)
