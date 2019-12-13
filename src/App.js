//根应用
import React, { Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
export default class App extends Component {
  render() {
    return (

      <BrowserRouter>  
      <Switch> 
        <Route path="/login" Component={Login}></Route> 
        <Route path="/" Component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

