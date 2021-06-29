import React, { createContext, lazy, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./Components/HomeComponents/BlogDetails/BlogDetails";
import loader from "./Components/HomeComponents/spinners/loader.gif";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));

export const SignInContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: true,
    email: "",
    password: "",
    error: "",
  });

  return (
    <SignInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Toaster />
        <Suspense fallback={loader}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
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
        </Suspense>
      </Router>
    </SignInContext.Provider>
  );
}

export default App;
