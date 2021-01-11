import React from 'react';
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
    buttonStyle: {
        marginTop:'5px'
    }
  });
function Signup() {

    const classes = useStyles();

    return (
        <div>
          <Navbar/>
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
           type ="name"
            className={classes.textFieldStyle}
            required
            id="outlined-required"
            label="First Name"
            variant="outlined"
            fullWidth

          />   
           <TextField
            className={classes.textFieldStyle}
            required
            id="outlined-required"
            label="Last Name"
            variant="outlined"
            fullWidth
            
          />
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
        

        <Button  className={classes.buttonStyle} type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>

        <Typography className={classes.textFieldStyle}>
          Do you have an account? <Link href="/signin"> Login</Link>
        </Typography>
      </Paper>
    </Grid>
  
        </div>
    )
}

export default Signup
