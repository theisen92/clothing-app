import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.com";

import HomePage from "./pages/homepage/homepage.com";
import ShopPage from "./pages/shop/shop.com";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.com";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
