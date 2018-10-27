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
  constructor(props) {
    super(props),
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
     console.log(window.location.href)
  }
  onClick(e) {
    var navColor = document.getElementById('mainNavBar');

    switch(e.target.id) {
      case "blogLink":
      case "NavLink2": 

      navColor.style.background = "black";
      break;

      case "NavLink1":
      case "NavLink4": 
      navColor.style.background = "transparent";
      break;



      default: 
      return null
    }
    
  }
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div id="MasterContainer">
            <nav id="mainNavBar" tabIndex="-1" ref={(nav) => ( this.Nav = nav)} onWheel={(e) => e.preventDefault()}>
            <div id="TitleDiv">
             {/*<h1 id="title">B.H.D Developper</h1>*/}
             <img src="logo3.png" id="title" style={{position: "relative", height: "9vh"}}alt="logo"></img>
             </div>
             <div id="NavLinkDiv">
              <NavLink className="NavLink" id="NavLink1" exact strict to="/" activeStyle={{ color: "#EAC67A" }} onClick={this.onClick}>
                Home
              </NavLink>
               <NavLink className="NavLink" id="NavLink2" exact strict to="/Projects" activeStyle={{ color: "#EAC67A" }} onClick={this.onClick}>
                Work
              </NavLink>
              <NavLink className="NavLink" id="blogLink" exact strict to="/blog" activeStyle={{ color: "#EAC67A" }} onClick={this.onClick}>Blog</NavLink>
              <NavLink className="NavLink" id="NavLink4" exact strict to="/Contacts" activeStyle={{ color: "#EAC67A" }} onClick={this.onClick}>Contact</NavLink>
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