import React, { Component } from "react";
import Parallax from 'parallax-js'

class LandingPage extends Component {
    componentDidMount() {
    	var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, { 
    	relativeInput: true,
    	hoverOnly: true,

    });

    }
	render() {

	
    return (
    	<div id="scene">
  <div data-depth="0.2" id="layer1" style={{background: "cyan"}}>background</div>
  <div id="foreground" data-depth="0.6"><h1 id="foreground1">Hello</h1><h1 id="foreground2">I'm Dambreville Benoit</h1><h1 id="foreground3">...and i provide Solutions</h1></div>
</div>
)

	}


}

export default LandingPage