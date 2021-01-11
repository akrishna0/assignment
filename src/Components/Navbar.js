import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link, withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    marginRight: "2vh",
  },
}));

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#32db2c" };
  }
  return { color: "#FFFFFF" };
};

function Navbar({ history }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Assignment
            </Typography>
            <Button className={classes.buttons} color="inherit">
              <Link style={currentTab(history, "/")} to="/">
                Home
              </Link>
            </Button>
            <Button className={classes.buttons} color="inherit">
              <Link style={currentTab(history, "/signup")} to="/signup">
                Sign up
              </Link>
            </Button>
            <Button className={classes.buttons} color="inherit">
              <Link style={currentTab(history, "/signin")} to="/signin">
                log in
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
