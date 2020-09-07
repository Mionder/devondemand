import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./select.css";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="selecter">
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Project type</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          name="age"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option value={10}>React Only</option>
          <option value={20}>React + Api</option>
          <option value={30}>React Native (Mobily) Only</option>
          <option value={40}>React Native (Mobily) + Api</option>
        </Select>
      </FormControl>
    </div>
  );
}