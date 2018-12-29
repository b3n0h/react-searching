import React from 'react'
import './Nav.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
  },
  link: {
    textAlign: 'center',
    marginLeft: 20,
  }
}

function Nav(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <a className='font' href="/">React Google Books API</a> 
          </Typography>
          <Typography className={classes.link}>
            <a className='font' href="/saved">View Saved Books</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Nav)
