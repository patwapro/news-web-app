import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from './Header';
import Home from './Home';
import Category from './Category';
import NewSource from './NewSource';
import {Switch,Route} from 'react-router-dom';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className={classes.layout}> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/source/:id" component={NewSource} />
            <Route exact path="/category/:id" component={Category} />
        </Switch>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
