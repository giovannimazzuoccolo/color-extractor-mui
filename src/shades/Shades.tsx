import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import { shade, tint } from 'polished';

interface IProps {
  primaryColor: string;
  secondaryColor: string;
}



const Shades: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isOpen, changeMenuState] = React.useState<null | HTMLElement>(null);

  const ShadeMenu = () => (
    <Menu
      id={`color_${props.primaryColor}`}
      open={Boolean(isOpen)}
      onClose={() => changeMenuState(null)}
      anchorEl={isOpen}
    >{generateShades(props.primaryColor)}
    </Menu> 
  );

  const SinglePalette = (props: { name: "primary" | "secondary" }) => {
    const { name } = props;
    return (
      <Button color={name} variant="contained" onClick={(e) => {
        changeMenuState(e.currentTarget);
      }}>
        Change Shade
      </Button>
    );
  };


  function generateShades(color:string) {
    
    let items = [];
    for(let index = 0; index < 10; index++) {
      items.push(<MenuItem key={index} style={{ backgroundColor: tint(index/10, color) }}>
        {shade((index/10), color)}
      </MenuItem>)
    }

    return items;
  }

  return (
    <div>
      <SinglePalette name="primary" />
      {isOpen && <ShadeMenu />}
      {/*<SinglePalette name="secondary" />*/}
    </div>
  );
};

export default Shades;
