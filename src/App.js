import React, { Component } from "react";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import  Route  from "react-router-dom/Route";
import LandingPage from "./LandingPage";
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
              <NavLink className="NavLink" to="/" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
               <NavLink className="NavLink" to="/Projects" activeStyle={{ color: "red" }}>
                Projects
              </NavLink>
              <NavLink className="NavLink" to="/Contacts" exacy strict>Contact</NavLink>
           </div>
            </nav>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                <Route path="/" component={LandingPage} />
                <Route path="/Projects" render={() => (<div>Hello World! this is projects' route</div>)}/>
                <Route path="/Contacts" render={() => (<div>Contacts'route</div>)} />
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