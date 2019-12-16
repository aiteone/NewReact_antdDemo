//根应用
import React from "react";
import {BrowserRouter   , Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>  
          <div>
            <Switch>  
              <Route exact path='/' component={Admin} />  
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

