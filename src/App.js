import React, { Component } from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";
import Home from "./Home";
import Admin from "./Admin";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/" className="brand">
                React Shopping Cart
              </Link>
              <div>
                <Link to="/admin" className="brand">
                  Admin
                </Link>
              </div>
            </header>
            <main>
              <Route path="/admin" component={Admin} />
              <Route path="/" exact={true} component={Home} />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
