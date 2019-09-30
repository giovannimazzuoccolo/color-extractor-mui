import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { shade, tint, meetsContrastGuidelines } from "polished";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import { makeStyles, createStyles } from "@material-ui/core/styles";

interface IProps {
  color: string;
  changeColor: Function;
  type: "primary" | "secondary";
}

const Shades: React.FunctionComponent<IProps> = (props: IProps) => {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        minWidth: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      button : {
        marginBottom: 8
      }
    })
  );
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function generateShades(color: string) {
    function isSelected(shade: string) {
      return shade === color && <CheckCircleOutline />;
    }

    function checkContrast(shade: string): boolean {
      const aObj = meetsContrastGuidelines(shade, "rgba(0, 0, 0, 0.87)");
      return aObj.AAA;
    }

    let items = [];
    for (let index = 4; index > 0; index--) {
      items.push(
        <MenuItem
          key={index + "t"}
          style={{
            backgroundColor: tint(index / 10, color),
            color: checkContrast(tint(index / 10, color)) ? "inherit" : "#fff"
          }}
          className={classes.root} //TODO: wrap in one func
          onClick={() => {
            props.changeColor(tint(index / 10, color));
            handleClose();
          }}
        >
          {isSelected(shade(index / 10, color))}
          {tint(index / 10, color)}
        </MenuItem>
      );
    }

    for (let index = 0; index < 5; index++) {
      items.push(
        <MenuItem
          key={index + "s"}
          style={{
            backgroundColor: shade(index / 10, color),
            color: checkContrast(shade(index / 10, color)) ? "inherit" : "#fff"
          }}
          className={classes.root}
          onClick={() => {
            props.changeColor(tint(index / 10, color));
            handleClose();
          }}
        >
          {isSelected(shade(index / 10, color))}
          {shade(index / 10, color)}
        </MenuItem>
      );
    }

    return items;
  }

  return (
    <div>
      <Button
        color={props.type}
        variant="contained"
        onClick={handleClick}
        aria-controls="demo"
        aria-haspopup="true"
        className={classes.button}
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
        {generateShades(props.color)}
      </Menu>
    </div>
  );
};

export default Shades;
