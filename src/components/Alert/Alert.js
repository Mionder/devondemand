import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '20px',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts(props) {
  const classes = useStyles();
    const {type, message} = props;
  return (
    <div className={classes.root}>
      <Alert severity={type}>{message}</Alert>
      {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert> */}
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </div>
  );
}