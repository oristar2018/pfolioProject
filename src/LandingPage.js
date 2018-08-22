import React, { Component } from "react";
import Parallax from 'parallax-js';
import scrollToComponent from 'react-scroll-to-component';

class LandingPage extends Component {
    componentDidMount() {
    	var scene = document.getElementById('scene');
    	var scene2 = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene, { 
    	relativeInput: true,
    	hoverOnly: true,
      scalarX: 2.5,
      scalarY: 5

    });

     var parallaxInstance2 = new Parallax(scene2, { 
    	relativeInput: true,
    	hoverOnly: true,
       scalarX: 2.5,
      scalarY: 1.5


    });

     window.scrollTo(0, 0);

    var plain = document.getElementById('plain');
    var slideIn1 = document.getElementById('slideIn1');
     plain.addEventListener('mouseover', (e) => {
    	slideIn1.style.animation = "1s linear 1 forwards slideIn";
    	
    })
    plain.addEventListener('mouseleave', (e) => {
    	slideIn1.style.left = "0";
    	slideIn1.style.opacity = "1"
    })
    var ReactLogo = document.getElementById('reactLogo');

    var routerLogo = document.getElementById('routerLogo');
    var reduxLogo = document.getElementById('reduxLogo');
    var webpackLogo = document.getElementById('webpackLogo');
    var expressLogo = document.getElementById('expressLogo');
    var es6Logo = document.getElementById('es6Logo');
    var d3Logo = document.getElementById('d3Logo');
    var nodeLogo = document.getElementById('nodeLogo');
    var expressLogo = document.getElementById('expressLogo');
    var mongodbLogo = document.getElementById('mongodbLogo');
    mongodbLogo.style.width = "15vw";
    ReactLogo.style.width = "15vw";
    ReactLogo.style.marginRight = "2vw";
    routerLogo.style.width = "15vw";
    reduxLogo.style.width = "15vw";
    webpackLogo.style.width = "15vw";
    expressLogo.style.width = "15vw";
    nodeLogo.style.width = "50vw";
    es6Logo.style.width = "15vw";
    d3Logo.style.width = "15vw";
    


    
    var Foreground = document.getElementById('foreground');
    var Foreground2 = document.getElementById('Foreground2');
    console.log(Foreground2)
    var foreground = document.getElementById('content');
    var foreground4 = document.getElementById('foreground4');
    var foreground5 = document.getElementById('foreground5');
    var foreground6 = document.getElementById('foreground6');

    foreground.addEventListener('mouseleave', (e) => {
      
      foreground4.style.animation = "3s linear 0.5s 1 forwards foreground4";
      foreground5.style.animation = "3s linear 0.5s 1 forwards foreground5";
      foreground6.style.animation = "3s linear 0.5s 1 forwards foreground6";
      ReactLogo.style.animation = "1.5s linear 1 forwards appear3";
      routerLogo.style.animation = "1.5s linear 0.25s 1 forwards appear3";
      reduxLogo.style.animation = "1.5s linear 0.5s 1 forwards appear3";
      webpackLogo.style.animation = "1.5s linear 0.75s 1 forwards appear3";
      expressLogo.style.animation = "1.5s linear 1s 1 forwards appear3";
      es6Logo.style.animation = "1.5s linear 1.25s 1 forwards appear4";
      d3Logo.style.animation = "1.5s linear 1.5s 1 forwards appear4";
      nodeLogo.style.animation = "1.5s linear 1.75s 1 forwards appear4";
      mongodbLogo.style.animation = "1.5s linear 2.5s 1 forwards appear4";
      
      
      

    })

    };

    

	render() {

	
    return (
    	<div>
    	<div id="scene" style={{background: "cyan", width: "130vw", overflowX: "hidden"}}>
  <div data-depth="0.2" id="layer1" style={{background: "cyan", width: "130vw", overflowX: "hidden"}}></div>
  <div ref={(div) => {this.Foreground = div}} id="foreground" data-depth="0.6"><h1 id="foreground1">Hello</h1><h1 id="foreground2">I'm Dambreville Benoit</h1><h1 id="foreground3">...and i provide Solutions</h1></div>
</div>
<div ref={(div) => {this.Plain = div}} className="Plain" id="plain"></div>
<section id="content">
<p id="slideIn1">I am a self taught full-stack Javascript developper specializing in the MERN stack.</p>

</section>

<div id="scene2" style={{background: "white"}} >
  <div data-depth="0.1" id="layer1" style={{background: "cyan"}}></div>
  <div data-depth="0.4" id="scene2Layer2">
  <img src="mongodb2.png" style={{height: "30vh"}}className="techImages" id="mongodbLogo" alt="tech logo" />
  <img src="ReactLogo.png" className="techImages" id="reactLogo" alt="tech logo"/>
  <img src="ReactRouter.png" className="techImages" id="routerLogo" alt="tech logo"/>
  <img src="ReduxLogo.png" className="techImages" id="reduxLogo" alt="tech logo"/>
  <img src="webpack.jpg" className="techImages" id="webpackLogo" alt="tech logo"/>
  <img src="Expressjs.png" className="techImages" id="expressLogo" alt="tech logo"/>
  <img src="es6.logo.png" className="techImages" id="es6Logo" alt="tech logo"/>
  <img src="d3js.png" className="techImages" id="d3Logo" alt="tech logo"/>
  <img src="NodeJsLogo.png" className="techImages" id="nodeLogo" alt="tech logo"/>

  </div>
  <div ref={(div) => {this.Foreground2 = div}} id="Foreground2" data-depth="0.9"><h1 id="foreground4">And here are</h1><h1 id="foreground5">The technologies that I've learnt and love using...everyday</h1><h1 id="foreground6"></h1></div>
</div>


</div>
)

	}


}

export default LandingPage