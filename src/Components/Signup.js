import React, {useState} from "react";
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
import {signup} from '../Auth/index'
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
  buttonStyle: {
    marginTop: "5px",
  },
});
function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const successMsg = () =>{
    return(
      <div  className="alert alert-success"
       style={{display: success ?"": "none"}}
      >
        User Registered
      </div>
    )
  };

  const errorMsg = () =>{
    return(
      <div  className="alert alert-danger"
      style={{display: error ?"": "none"}}
      >
        {error}
      </div>
    )
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
              <Box fontSize="h4.fontSize">Signup</Box>
            </Typography>
          </Grid>
          <form>
            <TextField
              type="name"
              className={classes.textFieldStyle}
              required
              label="First Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleChange("name")}
            />

            <TextField
              className={classes.textFieldStyle}
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleChange("email")}
            />
            <TextField
              className={classes.textFieldStyle}
              type="password"
              required
              id="outlined-required"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handleChange("password")}
            />
          </form>

          <button
           className=" btn btn-primary"
            onClick={onSubmit}

          >
            Sign Up
          </button>

          <Typography className={classes.textFieldStyle}>
            Do you have an account? <Link href="/signin"> Login</Link>
            <p>{JSON.stringify(values)}</p>
          </Typography>
        </Paper>
      </Grid>
      {successMsg()}
      {errorMsg()}
    </div>
  );
}

export default Signup;
