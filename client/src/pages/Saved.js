import React, { Component } from "react"
import Content from '../components/Content'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import API from "../utils/API";

const styles = {

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
      <Grid container>
        <Content 
          books={this.state.books}
        />
      </Grid>
    )
  }
}

  Saved.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  export default withStyles(styles)(Saved)