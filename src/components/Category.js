import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fetch from '../utility/Fetch';
import { Link } from "react-router-dom";
import moment from 'moment';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            error: null,
            isLoaded: false
        }
    }

    async componentDidMount(){
      const url = this.props.match.params.id;
      if(url !== null){
      const response = await Fetch.FetchCategory(url);
      if (response) {
          setTimeout(
            () =>
              this.setState({
                isLoaded: true,
                articles: response.articles
              }),
            1000
          );
        }
      }else{
        setTimeout(
          () =>
            this.setState({
              isLoaded: true
            }),
          1000
        );
      }  
  }


    render(){
        const { classes } = this.props;
        const { error, isLoaded, articles } = this.state;
        let headlines;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div className={classes.progress}><CircularProgress  /></div>;
          } else {
            if(articles){
              headlines = articles.map((items,index) => {
                return(
                    <Grid item xs={12} md={6} key={index}>
                      <Card className={classes.card}>
                          <div className={classes.details}>
                              <CardContent className={classes.content}>
                              <Typography variant="title">{items.title}</Typography>
                              <Typography variant="body2" color="textSecondary">
                              {moment(items.publishedAt).format("MMM Do YYYY")}
                              </Typography>
                              <Typography variant="body1" paragraph>
                                  {items.description}
                              </Typography>
                              </CardContent>  
                              <CardActions className={classes.actions} disableActionSpacing>
                              <Link to={`/source/${items.source.id}`} style={{textDecoration:'none'}}>
                                <Button size="small" color="primary">
                                {items.source.name}
                                </Button>
                                </Link>
                                <Button size="small" color="primary" href={items.url} target="_blank">
                                  Learn More
                                </Button>
                            </CardActions>                   
                          </div>
                          <Hidden xsDown>
                          <CardMedia
                            className={classes.cover}
                            image={items.urlToImage}
                            title={items.url}
                          />
                          </Hidden>
                      </Card>
                  </Grid>
                );
            });
            }else{
              headlines = <Typography variant="display1" gutterBottom>
                  News Not Found
              </Typography>;
            }
            return (
              <React.Fragment>
                  <Grid container spacing={24}>
                      <Grid item xs={12} md={12}>
                          <Typography variant="headline" gutterBottom>
                              Latest headlines of {this.props.match.params.id}
                          </Typography>
                      </Grid>
                      {headlines}
                </Grid>
              </React.Fragment>
          );
        }
    }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Category);