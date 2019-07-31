import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from './Search';
import CssConstants from '../layout/cssConstants';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    minHeight: `calc(100vh - ${CssConstants.navHeight + 50}px)`,
    paddingTop: `${CssConstants.navHeight + 20}px`,
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Find organizations you can help!
        </Typography>
        <Typography component="p">
          Fill out some information about yourself and we will match you with organizations
        </Typography>
        <Search/>
      </Paper>
    </div>
  );
};

export default SearchPage;
