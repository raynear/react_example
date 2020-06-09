import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Snackbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  Menu,
} from "@material-ui/icons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import clsx from "clsx";

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

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, { [classes.appBarShift]: open })}
          >
            <Toolbar className={classes.toolbar}>
              <Grid container className={classes.container}>
                <Grid item className={classes.grid} xs={3} md={3} lg={3}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <Menu />
                  </IconButton>
                </Grid>
                <Grid item className={classes.grid} xs={3} md={3} lg={3}>
                  <Typography>
                    <Link to="/">Main</Link>
                  </Typography>
                </Grid>
                <Grid item className={classes.grid} xs={3} md={3} lg={3}>
                  <Typography>
                    <Link to="/List/3">List</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerToggle}>
                {myTheme.direction === "ltr" ? (
                  <ChevronLeft />
                ) : (
                  <ChevronRight />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <Inbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <div
            className={clsx(classes.content, { [classes.contentShift]: open })}
          >
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={0}>
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route
                    exact
                    path="/List/:list_id"
                    component={MyListContainer}
                  />
                </Switch>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
