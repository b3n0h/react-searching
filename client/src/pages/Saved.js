import React, { Component } from "react"
import Content from '../components/Content'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import API from "../utils/API";

const styles = {
  header: {
    textAlign: 'center',
    marginTop: 20
  }
}

class Saved extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(e => console.log(e))
  }

  render() {

    const { classes } = this.props

    return (
      <React.Fragment>
        <h1 className={classes.header}>Saved Books</h1>
        <Grid container justify='center'>
          <Content
            books={this.state.books}
          />
        </Grid>
      </React.Fragment>
    )
  }
}

Saved.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Saved)