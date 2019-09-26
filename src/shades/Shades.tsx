import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { shade, tint } from "polished";

interface IProps {
  primaryColor: string;
  secondaryColor: string;
}

const Shades: React.FunctionComponent<IProps> = (props: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /*const SinglePalette = (props: { name: "primary" | "secondary" }) => {
    const { name } = props;
    return (
      <Button
        color={name}
        variant="contained"
        onClick={handleClick}
        aria-controls="demo"
        aria-haspopup="true"
      >
        Change Shade
      </Button>
    );
  };*/

  function generateShades(color: string) {
    let items = [];
    for (let index = 4; index > 0; index--) {
      items.push(
        <MenuItem
          key={index}
          style={{ backgroundColor: tint(index / 10, color) }}
        >
          {tint(index / 10, color)}
        </MenuItem>
      );
    }

    for (let index = 0; index < 5; index++) {
      items.push(
        <MenuItem
          key={index}
          style={{ backgroundColor: shade(index / 10, color) }}
        >
          {shade(index / 10, color)}
        </MenuItem>
      );
    }

    return items;
  }

  return (
    <div>
      <Button
        color={"primary"}
        variant="contained"
        onClick={handleClick}
        aria-controls="demo"
        aria-haspopup="true"
      >
        Change Shade
      </Button>
      <Menu
        
        id="demo"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        keepMounted
      >
        {generateShades(props.primaryColor)}
      </Menu>
    </div>
  );
};

export default Shades;
