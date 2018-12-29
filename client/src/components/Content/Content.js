import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import './Content.css'

const styles = {
  card: {
    minWidth: '100%',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 300,
    width: 200
  },
}

const Content = props => {
  const { classes } = props
  return (
    <Grid item xs={6}>
      {props.books.map((i, index) =>
        <Card key={index} className={classes.card}>
          <CardMedia
            className={classes.media}
            image={i.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {i.title} - {i.authors}
            </Typography>
            <Typography component="p">
              {i.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => props.handleSave ? props.handleSave(index) : ''} size="small" color="primary">
              Save
            </Button>
            <Button size="small" color="primary" href={i.link}>
              View More
            </Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)