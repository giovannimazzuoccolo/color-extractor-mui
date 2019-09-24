import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import { shade } from 'polished';

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

const Shades: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isOpen, changeMenuState] = React.useState(false);

  const PaletteMenu = (props: {color:string} ) => (
    <Menu
      id={`color_${props.color}`}
      open={isOpen}
      onClose={() => changeMenuState(false)}
    >{generateShades(props.color)}
    </Menu> 
  );


  function generateShades(color:string) {
    for(let i = 0; i> 10; i++) {
      return(<MenuItem key={i} style={{ backgroundColor: shade(i*10, color) }}>
        {shade(i*10, color)}
      </MenuItem>)
    }
  }

  return (
    <div>
      <SinglePalette name="primary" />
      <SinglePalette name="secondary" />
      <PaletteMenu color="#fff" />
    </div>
  );
};

export default Shades;
