import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SearchResults = ({ results }) => {
  return (
    <div>
      <Typography variant="h5" component="h3">
        We found some organizations that we think you could help:
      </Typography>
      <List>
        {results.map((res, idx) => (
          <ListItem>
            <Result {...res} key={idx} />
          </ListItem>
        ))}
      </List>
    </div>
  )
};

const useStyles = makeStyles({
  card: {
    width: 600,
    margin: '0 auto',
  },
});

const Result = ({ name, description, website, needs, connect }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" variant="body2" component="p">
          {description}
        </Typography>
        <Typography component="p">
          {needs}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>{website}</Typography>
        <Typography>{connect}</Typography>
      </CardActions>
    </Card>
  );
}
export default SearchResults
