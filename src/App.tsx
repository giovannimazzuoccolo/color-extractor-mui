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
            main: blue[300]
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
        </Paper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ButtonList />
          </Grid>
          <Grid item xs={6}>
            <InputFields />
          </Grid>
        </Grid>
        <Typography variant="h5" color="primary">
          Theme info
        </Typography>
        <Typography>
          Primary color: <strong>{color}</strong>
          <br />
        </Typography>
      </ThemeProvider>
    </Container>
  );
};