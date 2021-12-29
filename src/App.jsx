import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/scss/global.scss";
import { AppHeader } from "./cmps/AppHeader";

import React, { Component } from "react";
import { HomePage } from "./pages/HomePage";
import { StatisticPage } from "./pages/StatisticPage";
import { ContactPage } from "./pages/ContactPage";
import { ContactEdit } from "./pages/ContactEdit";
import { ContactDetails } from "./pages/ContactDetails";
import { signUpPage } from "./pages/SignupPage";

export class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader onChangeRoute={this.onChangeRoute} />
          <main>
            <Switch>
              <Route component={ContactEdit} path={"/contact/edit/:id?"} />
              <Route component={ContactDetails} path='/contact/:id' />
              <Route component={ContactPage} path={"/contact"} />
              <Route component={StatisticPage} path={"/statistic"} />
              <Route component={signUpPage} path={"/signup"} />
              <Route component={HomePage}  path={"/"} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
