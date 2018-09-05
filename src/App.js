import React, { Component } from "react";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import  Route  from "react-router-dom/Route";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";
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
             <h1 id="title">B.H.D Developper</h1>
             </div>
             <div id="NavLinkDiv">
              <NavLink className="NavLink" exact strict to="/" activeStyle={{ color: "#EAC67A" }}>
                Home
              </NavLink>
               <NavLink className="NavLink" exact strict to="/Projects" activeStyle={{ color: "#EAC67A" }}>
                Work
              </NavLink>
              <NavLink className="NavLink" exact strict to="/blog" activeStyle={{ color: "#EAC67A" }}>Blog</NavLink>
              <NavLink className="NavLink" exact strict to="/Contacts" activeStyle={{ color: "#EAC67A" }}>Contact</NavLink>
           </div>
            </nav>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                <Route path="/" exact strict component={LandingPage} />
                <Route path="/Projects" exact strict component={Projects}/>
                <Route path="/Contacts" exact strict component={Contact} />
                <Route path="/blog" exact strict component={Blog} />
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