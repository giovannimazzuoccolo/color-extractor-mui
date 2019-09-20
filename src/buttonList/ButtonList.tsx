import * as React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const ButtonList: React.FunctionComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: 10
      },
      button: {
        marginRight: 10,
        marginBottom: 10
      }
    })
  );

  const classes = useStyles();
  return (
    <Grid classes={{ root: classes.root }}>
      <Typography variant="h4" color="primary">
        Buttons
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        classes={{ root: classes.button }}
      >
        Contained and primary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        classes={{ root: classes.button }}
      >
        Contained and secondary
      </Button>
      <br />
      <Button
        variant="outlined"
        color="primary"
        classes={{ root: classes.button }}
      >
        Outlined and primary
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        classes={{ root: classes.button }}
      >
        Outlined and secondary
      </Button>
      <br />
      <Button color="primary" classes={{ root: classes.button }}>
        Normal and primary
      </Button>
      <Button color="secondary" classes={{ root: classes.button }}>
        normal and secondary
      </Button>
    </Grid>
  );
};

export default ButtonList;
