import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Snackbar,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import useStyles from "./Styles";
import Copyright from "./Pages/Copyright";

import LandingPage from "./Pages/LandingPage";
import MyListContainer from "./Pages/MyListContainer";

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#50A8B8",
    },
  },
});

function App(props: any) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container className={classes.container}>
              <Grid item className={classes.grid} xs={3} md={3} lg={3}>
                <Typography>Main</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={0}>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route
                    exact
                    path="/List/:list_id"
                    component={MyListContainer}
                  />
                </Switch>
              </BrowserRouter>
            </Grid>
          </Container>
          <Copyright />
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={5000}
            open={props.open}
            onClose={props.handleClose}
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            message={<span id="message-id">{props.message}</span>}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
