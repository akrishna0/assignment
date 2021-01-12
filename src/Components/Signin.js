import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  TextField,
  Link,
  Button,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../Auth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "400px",
    margin: "20px auto",
  },
  gridStyle: {
    padding: "20",
  },
  textFieldStyle: {
    padding: "7px",
  },
  avatarStyle: {
    backgroundColor: "secondary",
  },
});
function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Signin Failed"));
  };
  const redirections = () => {
    if (didRedirect) {
      if (user) {
        return <div>This is home</div>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  const loadingMsg = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: loading ? "" : "none" }}
      >
        loading......
      </div>
    );
  };

  const errorMsg = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid align="center">
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}></Avatar>
            <Typography variant>
              <Box fontSize="h4.fontSize">Login</Box>
            </Typography>
          </Grid>
          <form>
            <TextField
              className={classes.textFieldStyle}
              onChange={handleChange("email")}
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textFieldStyle}
              type="password"
              onChange={handleChange("password")}
              required
              id="required"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </form>

          <button
           className=" btn btn-primary"
            onClick={onSubmit}

          >
            Log In
          </button>

          <Typography className={classes.textFieldStyle}>
            <Link href="#"> Forgot Password ? </Link>
          </Typography>
          <Typography className={classes.textFieldStyle}>
            Do not have account? <Link href="/signup"> Signup</Link>
          </Typography>
        </Paper>
      </Grid>
      {errorMsg()}
      {/* {loadingMsg()} */}
    </div>
  );
}

export default Signin;
