import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ColorThief from "colorthief";

//import { makeStyles, createStyles } from "@material-ui/styles";
import {
  createMuiTheme,
  Theme as AugmentedTheme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import AppBar from "./appBar/AppBar";
import { ThemeProvider } from "@material-ui/styles";

import ButtonList from "./buttonList/ButtonList";
//components

import DragAreaPicture from "./dragAreaPicture/DragAreaPicture";
import { blue } from "@material-ui/core/colors";

export default (props: {}) => {
  const [theme, setTheme] = React.useState<AugmentedTheme | object>({});

  /*const useStyles = makeStyles((theme: AugmentedTheme ) =>
  createStyles({
    "@global": {
      body: {
        backgroundColor: "#fff"
      }
    },
    paper: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  })
);*/

  //const classes = useStyles(props);
  const [color, setColor] = React.useState<string>(blue.toString());

  const [uploaded, setUpload] = React.useState<
    HTMLImageElement | string | null
  >();
  const [widthHeight, setWidthHeight] = React.useState({
    width: 200,
    height: 200
  });

  const imgRef = React.useRef(null);

  const getColor = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    const result = colorThief.getColor(img);

    setColor(rgbToHex(result[0], result[1], result[2]));

    /*createMuiTheme({ 'palette': {
      primary: blue,
      secondary: color,
    }})*/
    const theme = createMuiTheme({
      spacing: 4,
      palette: {
        primary: {
          main: rgbToHex(result[0], result[1], result[2])
        }
      }
    });

    setTheme(theme);
  };

  function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function imageUploaded(file: File) {
    if (file) {
      const img = new Image();

      img.onload = () => {
        setUpload(img.src);
        setWidthHeight({ width: img.naturalWidth, height: img.naturalHeight });
      };

      img.src = window.URL.createObjectURL(file);
    }
  }

  return (
    <Container component="main">
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <AppBar color={color} />
        <div>
          {!uploaded && <DragAreaPicture onComplete={imageUploaded} />}
          {uploaded && (
            <img
              crossOrigin={"anonymous"}
              src={uploaded.toString()}
              ref={imgRef}
              alt="uploader"
              width={widthHeight.width}
              height={widthHeight.height}
              onLoad={getColor}
            />
          )}
          <ButtonList color={color} />
        </div>
      </ThemeProvider>
    </Container>
  );
};
