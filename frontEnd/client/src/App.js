import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Edit from "./pages/edit";
import store from "./store";
import { Globalstyle } from "./style.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/edit" exact component={Edit} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
