import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';

interface IProps {
  primaryColor: string;
  secondaryColor: string;
}

const SinglePalette = (props: { name: "primary" | "secondary" }) => {
  const { name } = props;
  return (
    <Button color={name} variant="contained">
      Change Shade
    </Button>
  );
};

const Palette: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isOpen, changeMenuState] = React.useState(false);

  const PaletteMenu = (props: {color:string} ) => (
    <Menu
      id={`color_${props.color}`}
      open={isOpen}
      onClose={() => changeMenuState(false)}
    >
      <MenuItem>
        Shade [10]
      </MenuItem>
    </Menu> 
  );

  return (
    <div>
      <SinglePalette name="primary" />
      <SinglePalette name="secondary" />
      <PaletteMenu color="#fff" />
    </div>
  );
};

export default Palette;
