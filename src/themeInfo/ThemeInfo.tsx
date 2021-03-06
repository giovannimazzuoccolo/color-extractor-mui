import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";

interface IProps {
  color: string;
}

const ThemeInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  const [changeColorButton, changeColorButtonFunc] = React.useState(false);

  return (
    <>
      <Typography variant="h5" color="primary">
        Theme info
      </Typography>
      <Typography>
        Primary color: <strong>{props.color}</strong>{" "}
        <Button
          color="primary"
          onClick={e => {
            changeColorButtonFunc(!changeColorButton);
          }}
        >
          Change Color
        </Button>
        {changeColorButton && <ChromePicker color={props.color} />}
        <br />
        Secondary color: <strong>{props.color}</strong>
      </Typography>
    </>
  );
};

export default ThemeInfo;
