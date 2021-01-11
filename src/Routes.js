import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Signup from './Components/Signup';
import SignIn from './Components/Signin'
const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={SignIn} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
