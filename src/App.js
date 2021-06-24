import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Toaster />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashboard/:panel">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
