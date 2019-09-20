import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import { Button } from "@material-ui/core";

interface IProps {
  onComplete: Function;
  small?: boolean;
}

export default (props: IProps) => {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        minWidth: 200,
        minHeight: props.small ? 20 : 200,
        maxWidth: "33%",
        marginTop: "16px",
        display: "flex",
        justifyContent: props.small ? "flex-start" : "center",
        alignItems: "center",
        border: props.small ? "0" : "2px dashed #ccc",
        cursor: "pointer"
      },
      icon: {
        fontSize: 70,
        color: "#aaa",
        cursor: "pointer"
      }
    })
  );
  const classes = useStyles();

  function fileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      props.onComplete(event.target.files[0]);
    }
  }

  return (
    <div className={classes.root}>
      <input
        type="file"
        accept="image/*"
        onChange={fileChange}
        id="uploader"
        style={{ display: "none" }}
      />
      {props.small ? (
        <label htmlFor="uploader">
          <Button component="span">Reupload logo</Button>
        </label>
      ) : (
        <label htmlFor="uploader">
          <AddCircleOutline className={classes.icon} />
        </label>
      )}
    </div>
  );
};
