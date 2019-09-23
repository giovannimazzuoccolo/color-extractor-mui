import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
interface IProps {
  primaryColor: string;
  secondaryColor: string;
}

const Palette: React.FunctionComponent<IProps> = (props: IProps) => {
  const SinglePalette = (props: { name: "primary" | "secondary" }) => {
    const { name } = props;
    return (
      <Button color={name} variant="contained">
        Change Shade
      </Button>
    );
  };

  const Menu = (color:string) => {
    
  };

  return (
    <div>
      <SinglePalette name="primary" />
      <SinglePalette name="secondary" />
    </div>
  );
};

export default Palette;
