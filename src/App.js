import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from "./components/Login";
import Home from "./components/Home";
import store from "./store";
import base from "./components/HOC/Base";
import noAuth from "./components/HOC/NoAuth";
import SignIn from "./components/SignIn";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={base(Home)} />
        <Route path='/login' component={noAuth(Login)} />
        <Route path='/cadastro-usuario' component={noAuth(SignIn)} />
      </Router>
    </Provider>
  );
}

export default App;
