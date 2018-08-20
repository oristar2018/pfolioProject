import React, { Component } from "react";
import Parallax from "parallax-js";

class Projects extends Component {
	componentDidMount() {
		var scene3 = document.getElementById("scene3");
		var scene4 = document.getElementById("scene4")
		var parallaxInstance = new Parallax(scene3, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 5,
			scalarY: 5

		});

		var parallaxInstance2 = new Parallax(scene4, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 5,
			scalarY: 5

		});

		var plain3 = document.getElementById('plain3');
		var scene4 = document.getElementById('scene4');

		plain3.addEventListener('mouseover', (e) => {
			scene4.style.animation = "1s linear 1 forwards appear"
		})

		/*var TeaMain = document.getElementById('TeaMain');
		var Tea2 = document.getElementById('Tea2');
		var Tea3 = document.getElementById('Tea3');
		var TeaMenu = document.getElementById('TeaMenu');*/



	}

	render() {
		return (
			<div id="ProjectsContainer">
				{" "}
				test
				<div id="scene3">
					<div id="ProjectsLayer1" data-depth="0.2" />
					<div id="ProjectsLayer2" data-depth="0.4" data-pointer-events="all">
						<img
							className="ProjectsLayerImage1"
							id="TeaMain"
							src="TeaMain.png"
							alt="picture of tea website"
							
						/>
						<img
							className="ProjectsLayerImage1"
							id="Tea2"
							src="Tea2.png"
							alt="picture of tea website"
							
						/>
						<img
							className="ProjectsLayerImage1"
							id="Tea3"
							src="Tea3.png"
							alt="picture of tea website"
							
						/>
						<img
							className="ProjectsLayerImage1"
							id="TeaMenu"
							src="TeaMenuNew.png"
							alt="pic of tea menu"
							
						/>
					</div>
					<div id="ProjectsLayer3" data-depth="0.6" />
					<div id="ProjectsLayer4" data-depth="0.9">
						<a href="https://bhdhouseofteas.herokuapp.com"><h1 className="h1Projects" id="TeaTitle">MERN Ecommerce website</h1></a>
					</div>
				</div>
				<div id="plain2"></div>
				<div id="plain3"></div>
				<div id="scene4">
				<div id="scene4Layer1" data-depth="0.2"><img id="scene4image1" src="dungeonOfArcana.png" alt="rogue game" /></div>
				<div id="scene4Layer2" data-depth="0.9"><a href="https://dungeonofarcana.herokuapp.com"><h1 className="h1Projects">Rogue-Like Game</h1></a></div>

				</div>
  
			</div>
		);
	}
}

export default Projects;