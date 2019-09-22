import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const InputFields: React.FunctionComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: 10
      },
      input: {
        marginBottom: 10
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: 20
      }
    })
  );

  const classes = useStyles();
  return (
    <Grid classes={{ root: classes.root }}>
      <FormControl className={classes.formControl}>
        <Typography variant="h4" color="primary" className={classes.input}>
          Input fields
        </Typography>
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
          className={classes.input}
        />

        <Select
          value={10}
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
        <FormControlLabel
          control={<Checkbox value="checkedC" className={classes.input} />}
          label="Uncontrolled"
        />
      </FormControl>
    </Grid>
  );
};

export default InputFields;
