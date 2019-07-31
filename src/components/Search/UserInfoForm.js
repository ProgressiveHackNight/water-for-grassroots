import React from 'react';
import Input from './Input';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const UserInfoForm = ({ handleSubmit }) => {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    zipCode: '',
  });
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
      <Input onChange={handleChange('zipCode')} label="Zip Code" />
    </form>
  )
};

export default UserInfoForm
