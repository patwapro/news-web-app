import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
  },
  link:{
      textDecoration:'none'
  }
});

function CategoryMenu(props) {
  const { classes } = props;

  return (
    <React.Fragment>
        <Grid container spacing={24}>
            <Grid item xs={12} md={3}>
                <Paper className={classes.root} elevation={1}>
                    <Link to="category/health" className={classes.link}>
                        <Typography variant="title" component="h3">
                        Health
                        </Typography>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.root} elevation={1}>
                    <Link to="category/sports" className={classes.link}>
                        <Typography variant="title" component="h3">
                        sports
                        </Typography>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.root} elevation={1}>
                    <Link to="category/technology" className={classes.link}>
                        <Typography variant="title" component="h3">
                        technology
                        </Typography>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.root} elevation={1}>
                    <Link to="category/business" className={classes.link}>
                        <Typography variant="title" component="h3">
                        business
                        </Typography>
                    </Link>
                </Paper>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

CategoryMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryMenu);