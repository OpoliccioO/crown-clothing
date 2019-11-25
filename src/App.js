import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignPage from "./pages/sign/sign.component";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signup" component={SignPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
