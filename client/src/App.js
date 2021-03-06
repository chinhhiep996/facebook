import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Redux
import store from "./store";

import Main from "./components/Layout/Main";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </Main>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
