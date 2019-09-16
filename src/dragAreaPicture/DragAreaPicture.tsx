import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

interface IProps {
  onComplete: Function;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 300,
      minHeight: 300,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "4px dashed #ccc",
      cursor: "pointer"
    },
    icon: {
      fontSize: 100,
      color: "#aaa",
      cursor: "pointer"
    }
  })
);

export default (props: IProps) => {
  const classes = useStyles();

  function fileChange(event: React.ChangeEvent<HTMLInputElement>) {

    if (event.target.files && event.target.files[0]) {
      props.onComplete(event.target.files[0]);
    }
  }

  return (
    <div className={classes.root}>
      <label htmlFor="uploader">
        <input
          type="file"
          onChange={fileChange}
          id="uploader"
          style={{ display: "none" }}
        />
        <AddCircleOutline className={classes.icon} />
      </label>
    </div>
  );
};
