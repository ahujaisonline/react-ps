import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCourse from "./ManageCourse";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <ToastContainer autoClose={3000}></ToastContainer>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/courses" component={CoursesPage}></Route>
          <Route path="/course/:slug" component={ManageCourse}></Route>
          <Route path="/course" component={ManageCourse}></Route>
          <Redirect from="/lol" to="/about"></Redirect>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
