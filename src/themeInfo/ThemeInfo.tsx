import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IProps {
    color: string;
  }

const ThemeInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        Theme info
      </Typography>
      <Typography>
        Primary color: <strong>{props.color}</strong>
        <br />
      </Typography>
    </>
  );
};

export default ThemeInfo;
