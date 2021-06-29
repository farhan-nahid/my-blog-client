import React, { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

export const UserContext = createContext();
export const SignInContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: true,
    email: "",
    password: "",
    error: "",
  });
  const [blog, setBlog] = useState();
  return (
    <UserContext.Provider value={[blog, setBlog]}>
      <SignInContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Toaster />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard/:panel">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </SignInContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
