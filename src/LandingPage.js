import React, { Component } from "react";
import Parallax from 'parallax-js'

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
      scalarY: 5


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

    }
	render() {

	
    return (
    	<div>
    	<div id="scene" style={{background: "cyan", width: "130vw", overflowX: "hidden"}}>
  <div data-depth="0.2" id="layer1" style={{background: "cyan", width: "130vw", overflowX: "hidden"}}></div>
  <div id="foreground" data-depth="0.6"><h1 id="foreground1">Hello</h1><h1 id="foreground2">I'm Dambreville Benoit</h1><h1 id="foreground3">...and i provide Solutions</h1></div>
</div>
<div className="Plain" id="plain"></div>
<section id="content">
<p id="slideIn1">I am a self taught full-stack Javascript developper specializing in the MERN stack.</p>

</section>

<div id="scene2" style={{background: "white"}} >
  <div data-depth="0.1" id="layer1" style={{background: "cyan"}}></div>
  <div data-depth="0.4" id="scene2Layer2">
  <img src="mongodb2.png" className="techImages" id="mongodbLogo" alt="tech logo" />
  <img src="ReactLogo.png" className="techImages" id="reactLogo" alt="tech logo"/>
  <img src="ReactRouter.png" className="techImages" id="routerLogo" alt="tech logo"/>
  <img src="ReduxLogo.png" className="techImages" id="reduxLogo" alt="tech logo"/>
  <img src="webpack.jpg" className="techImages" id="webpackLogo" alt="tech logo"/>
  <img src="Expressjs.png" className="techImages" id="expressLogo" alt="tech logo"/>
  <img src="es6.logo.png" className="techImages" id="es6Logo" alt="tech logo"/>
  <img src="d3js.png" className="techImages" id="d3Logo" alt="tech logo"/>
  <img src="NodeJsLogo.png" className="techImages" id="nodeLogo" alt="tech logo"/>

  </div>
  <div id="foreground" data-depth="0.9"><h1 id="foreground1">And here are</h1><h1 id="foreground2">The technologies that I've learnt</h1><h1 id="foreground3">...love using..everyday</h1></div>
</div>


</div>
)

	}


}

export default LandingPage