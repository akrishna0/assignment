import React from "react";
import Navbar from './Navbar'
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
      padding: '7px'
  },
  avatarStyle: {
    backgroundColor: "secondary",
  },
});
function Signin() {
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
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            fullWidth
            />
          <TextField
            className={classes.textFieldStyle}
            type="password"
            required
            id="outlined-required"
            label="Password"
            variant="outlined"
            fullWidth
            />
        </form>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>

        <Typography className={classes.textFieldStyle}>
          <Link href="#"> Forgot Password ? </Link>
        </Typography>
        <Typography className={classes.textFieldStyle}>
          Do not have account? <Link href="/signup"> Signup</Link>
        </Typography>
      </Paper>
    </Grid>
          </div>
  );
}

export default Signin;
