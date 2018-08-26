import React, { Component } from "react";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import  Route  from "react-router-dom/Route";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Contact from "./Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Parallax } from "react-parallax";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div id="MasterContainer">
            <nav id="mainNavBar">
            <div id="TitleDiv">
             <h1 id="title">Logo/Dambreville Portfolio</h1>
             </div>
             <div id="NavLinkDiv">
              <NavLink className="NavLink" exact strict to="/" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
               <NavLink className="NavLink" exact strict to="/Projects" activeStyle={{ color: "red" }}>
                Projects
              </NavLink>
              <NavLink className="NavLink" exact strict to="/Contacts" exacy strict>Contact</NavLink>
           </div>
            </nav>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                <Route path="/" exact strict component={LandingPage} />
                <Route path="/Projects" exact strict component={Projects}/>
                <Route path="/Contacts" exact strict component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;