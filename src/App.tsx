import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ColorThief from "colorthief";
import { blue } from "@material-ui/core/colors";
import {
  createMuiTheme,
  Theme as AugmentedTheme
} from "@material-ui/core/styles";
import AppBar from "./appBar/AppBar";
import { ThemeProvider } from "@material-ui/styles";
import ButtonList from "./buttonList/ButtonList";
import InputFields from "./inputFields/InputFields";
import Grid from "@material-ui/core/Grid";
import DragAreaPicture from "./dragAreaPicture/DragAreaPicture";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ThemeInfo from "./themeInfo/ThemeInfo";
import Shades from "./shades/Shades";

/**
 * TODO:add contrast ratio for accessibility https://polished.js.org/docs/#meetscontrastguidelines
 * add a menu for palette
 */

export default () => {
  const [theme, setTheme] = React.useState<AugmentedTheme>(
    createMuiTheme({
      palette: {
        secondary: {
          main: blue[500]
        }
      }
    })
  );

  const [color, setColor] = React.useState<string>(blue[500]);

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

    setTheme(
      createMuiTheme({
        palette: {
          primary: {
            main: rgbToHex(result[0], result[1], result[2])
          },
          secondary: {
            main: blue[500]
          }
        }
      })
    );
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

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: 8,
        marginBottom: 8
      },
      imageLoader: {
        display: "none"
      },
      imageDisplayed: {
        maxHeight: 100,
        maxWidth: 200,
        marginTop: 16,
        padding: 8
      }
    })
  );

  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <AppBar />
        <Paper className={classes.paper}>
          <Typography variant="h4" color="primary">
            Upload your logo
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {!uploaded && <DragAreaPicture onComplete={imageUploaded} />}
              {uploaded && (
                <>
                  <img
                    crossOrigin={"anonymous"}
                    src={uploaded.toString()}
                    ref={imgRef}
                    alt="uploader"
                    width={widthHeight.width}
                    height={widthHeight.height}
                    onLoad={getColor}
                    className={classes.imageLoader}
                  />
                  <img
                    crossOrigin={"anonymous"}
                    src={uploaded.toString()}
                    alt="uploaded"
                    className={classes.imageDisplayed}
                  />
                  <DragAreaPicture onComplete={imageUploaded} small />
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              <Shades color={color} changeColor={setColor} type="primary" />
              <Shades color={blue[500]} changeColor={setColor} type="secondary" />

            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ButtonList />
          </Grid>
          <Grid item xs={6}>
            <InputFields />
          </Grid>
        </Grid>
        <ThemeInfo color={color} />
      </ThemeProvider>
    </Container>
  );
};
