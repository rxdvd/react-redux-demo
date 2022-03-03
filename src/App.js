import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/deposit">Deposit</NavLink></li>
            <li><NavLink activeClassName="active" to="/withdraw">Withdraw</NavLink></li>
          </ul>
        </nav>
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/deposit" component={DepositPage}/>
            <Route path="/withdraw" component={WithdrawPage}/>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
