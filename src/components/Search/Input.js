import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const Input = ({ onChange, label, value }) => {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-input"
      label={label}
      className={classes.textField}
      value={value}
      onChange={onChange}
      margin="normal"
      variant="outlined"
    />
  )
};

export default Input;
