import React, { Component } from "react";
import Parallax from "parallax-js";
import scrollToComponent from 'react-scroll-to-component';

class Projects extends Component {
	constructor(props) {
		super(props),
		this.onScroll = this.onScroll.bind(this);

	};

    onScroll(e) {
    	e.preventDefault();
    	//console.log(e);
    	var Frame1 = document.getElementById('scene5image1');
		var Frame2 = document.getElementById('scene6image1');
		var FrameFront1 = document.getElementById('scene5Layer2');
		var FrameFront2 = document.getElementById('scene6Layer2');
		var scene3 = document.getElementById("scene3");
		var scene4 = document.getElementById("scene4");
		var scene5 = document.getElementById("scene5");
		var scene6 = document.getElementById("scene6");

    	 if (e.deltaY > 0) {
    	switch(e.target.id) {
    	 case "ProjectsLayer4":
         scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         scene4.style.animation = "0.7s ease-in 1 forwards appear"
         break;
         case "scene4Layer2":
         scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         Frame1.style.animation = "0.7s ease-in 1 forwards appear1"
         break;
         case "scene5Layer2":
         	scrollToComponent(this.Scene6, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	Frame2.style.animation = "0.7s ease-in 1 forwards appear2"
         	break;
         case "scene6Layer2":
         	scrollToComponent(this.Scene6, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	break;			
         default:
         return null
    	}


    }
         if (e.deltaY < 0) {
         	switch(e.target.id) {
         	case "ProjectsLayer4":
         	scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	break;
         	case "scene4Layer2":
         	scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	break;
         	case "scene5Layer2":
         	scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	break;	
         	case "scene6Layer2":
         	scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         	break;		
         	default:
         	return null	
         	}
         }
	}

	componentDidMount() {

		var scene3 = document.getElementById("scene3");
		var scene4 = document.getElementById("scene4");
		var scene5 = document.getElementById("scene5");
		var scene6 = document.getElementById("scene6");

		var parallaxInstance = new Parallax(scene3, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 1,
			scalarY: 0

		});

		var parallaxInstance2 = new Parallax(scene4, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 1,
			scalarY: 0

		});

		var parallaxInstance3 = new Parallax(scene5, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 1,
			scalarY: 0

		});

var parallaxInstance4 = new Parallax(scene6, {
			relativeInput: true,
			hoverOnly: true,
			pointerEvents: true,
			scalarX: 1,
			scalarY: 0

		});


		//var plain3 = document.getElementById('plain3');
        window.scrollTo(0, 0);
		var scene4 = document.getElementById('scene4');
		var Frame1 = document.getElementById('scene5image1');
		var Frame2 = document.getElementById('scene6image1');


		var foreground1 = document.getElementById('ProjectsLayer4');
		var foreground2 = document.getElementById('scene4Layer2');
		var foreground3 = document.getElementById('scene5Layer2');
		var foreground4 = document.getElementById('scene6Layer2');
		console.log(foreground1, foreground2, foreground3, foreground4);
		foreground1.focus();

		foreground1.addEventListener('keydown', (e) => {

			switch(e.target.id) {

				case "ProjectsLayer4":
				if (e.key === "ArrowDown") {
					scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					scene4.style.animation = "0.7s ease-in 1 forwards appear";
					foreground2.focus();
				}
				
				else if (e.key === "ArrowUp") {
					scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					foreground1.focus();

				};
				break;

				default:
				return null


			}


		});

			foreground2.addEventListener('keydown', (e) => {

			switch(e.target.id) {

				case "scene4Layer2":
				if (e.key === "ArrowDown") {

					 scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
        			 Frame1.style.animation = "0.7s ease-in 1 forwards appear1";
        			 foreground3.focus();

				}

				else if (e.key === "ArrowUp") {
					scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					foreground1.focus();

				};
				break;

				default:
				return null


			}


		});


	foreground3.addEventListener('keydown', (e) => {

			switch(e.target.id) {

				case "scene5Layer2":
				if (e.key === "ArrowDown") {

					scrollToComponent(this.Scene6, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
         			Frame2.style.animation = "0.7s ease-in 1 forwards appear2";
         			foreground4.focus();

				}

				else if (e.key === "ArrowUp") {
					scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					foreground2.focus();
				};
				break;

				default:
				return null


			}


		});


	foreground4.addEventListener('keydown', (e) => {

			switch(e.target.id) {

				case "scene6Layer2":
				if (e.key === "ArrowDown") {
					scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					foreground1.focus();
				}

				else if (e.key === "ArrowUp") {
					scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'});
					foreground3.focus();
				};
				break;

				default:
				return null


			}


		});





		/*var FrameFront1 = document.getElementById('scene5Layer2');
		var FrameFront2 = document.getElementById('scene6Layer2');*/


		/*scene3.addEventListener('mouseleave', (e) => {
			
			scene4.style.animation = "0.7s ease-in 1 forwards appear"
		});

		scene4.addEventListener('mouseleave', (e) => {
			
			Frame1.style.animation = "0.7s ease-in 1 forwards appear1"
		});

		FrameFront1.addEventListener('mouseleave', (e) => {
			
			Frame2.style.animation = "0.7s ease-in 1 forwards appear2"
		});*/

		/*var TeaMain = document.getElementById('TeaMain');
		var Tea2 = document.getElementById('Tea2');
		var Tea3 = document.getElementById('Tea3');
		var TeaMenu = document.getElementById('TeaMenu');*/



	}



	render() {
		window.addEventListener("load", (e) => window.scrollTo(0, 0));

		var buttonDownStyle = {
  height: "10vh",
  width: "5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png'), white",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(90deg)",
  color: "red",
  border: "none",
  outline: "none",
  color: "transparent",
  top: "30vh"
};

var buttonUpStyle = {
	  height: "10vh",
  width: "5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png'), white",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(-90deg)",
   border: "none",
  outline: "none",
  color: "transparent",
  top: "-30vh"

};

 
		let buttonDownFrameStyle = {
	height: "10vh",
  width: "5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(90deg)",
  color: "red",
  border: "none",
  outline: "none",
  color: "transparent",
  top: "35vh"

};

let buttonUpFrameStyle = {
	  height: "10vh",
  width: "5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(-90deg)",
   border: "none",
  outline: "none",
  color: "transparent",
  top: "-23vh"
};

/*var Frame1 = document.getElementById('scene5image1');
var Frame2 = document.getElementById('scene6image1');
var FrameFront1 = document.getElementById('scene5Layer2');
var FrameFront2 = document.getElementById('scene6Layer2');
var scene3 = document.getElementById("scene3");
var scene4 = document.getElementById("scene4");
var scene5 = document.getElementById("scene5");
var scene6 = document.getElementById("scene6");
*/
		return (
			<div id="ProjectsContainer">
				{" "}
				
				<div className="scenes" id="scene3" ref={(div) => { this.Scene3 = div; }}>
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
					<div tabIndex="0" onWheel={this.onScroll} id="ProjectsLayer4" data-depth="0.9">
						<a href="https://bhdhouseofteas.herokuapp.com"><h1 className="h1Projects" id="TeaTitle">MERN Ecommerce website</h1></a>		
				        <button className="ProjectsButton" onScroll={this.onScroll} style={buttonDownStyle} onClick={() => {var scene4 = document.getElementById("scene4"); scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'}) ; scene4.style.animation = "0.7s ease-in 1 forwards appear"}}></button>
					    {/*<div><img onClick={() => scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'})} className="ArrowClass" id="Arrow1" src="Arrow.gif" alt="arrow"/></div>*/}
					</div>
				</div>
				{/*<div id="plain2"></div>
				<div id="plain3"></div>*/}
				<div className="scenes" id="scene4" ref={(div) => { this.Scene4 = div; }}>
				<div id="scene4Layer1" data-depth="0.2"><img id="scene4image1" src="dungeonOfArcana.png" alt="rogue game" style={{width: "100vw"}} /></div>
				<div tabIndex="0" onWheel={this.onScroll} id="scene4Layer2" data-depth="0.9"><a href="https://dungeonofarcana.herokuapp.com"><h1 className="h1Projects">Rogue-Like Game</h1></a>
				<button className="ProjectsButton" onScroll={this.onScroll} style={buttonUpStyle} onClick={() => scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'})}></button>
				<button className="ProjectsButton"  onScroll={this.onScroll} style={buttonDownStyle} onClick={() => {var Frame1 = document.getElementById('scene5image1');
var Frame2 = document.getElementById('scene6image1'); scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'}); Frame1.style.animation = "0.7s ease-in 1 forwards appear1"}}></button>
				</div>
				</div>
                <div className="scenes" id="scene5" ref={(div) => { this.Scene5 = div; }}>
				<div id="scene5Layer1" data-depth="0.2">{/*<img id="scene5image1" src="SimonSays.png" alt="simon says" />*/}<iframe title="pr1frame" style={{ opacity: "0", height: "100vh", width: "100vw"}} id="scene5image1" src="https://codepen.io/oristar2018/full/xJxqrx/" /></div>
				{/*<div id="scene5Layer2" data-depth="0.9"><a href="https://dungeonofarcana.herokuapp.com"><h1 className="h1Projects">Rogue-Like Game</h1></a></div>*/}
                <div tabIndex="0" onWheel={this.onScroll} id="scene5Layer2" data-depth="0.9">
                <button className="ProjectsButton"  onScroll={this.onScroll} style={buttonUpFrameStyle} onClick={() => scrollToComponent(this.Scene4, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'})}></button>
                <a href="https://codepen.io/oristar2018/full/xJxqrx/"><h1 className="h1Projects" id="SimonGame">Simon Game</h1></a>	
                <button className="ProjectsButton"  onScroll={this.onScroll} style={buttonDownFrameStyle} onClick={() => {var Frame1 = document.getElementById('scene5image1');
var Frame2 = document.getElementById('scene6image1'); scrollToComponent(this.Scene6, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'}); Frame2.style.animation = "0.7s ease-in 1 forwards appear2"}}></button></div>
                </div>
				<div className="scenes" id="scene6" ref={(div) => { this.Scene6 = div; }}>
				<div id="scene6Layer1" data-depth="0.2" data-pointer-events="all">{/*<img id="scene6image1" src="RandomQuoteGenerator.png" alt="random quote" />*/}<iframe title="pr2frame"style={{ opacity: "0", height: "100vh", width: "100vw"}} id="scene6image1" src="https://codepen.io/oristar2018/full/JZpEWr/" /></div>
				{/*<div id="scene6Layer2" data-depth="0.9"><a href="https://dungeonofarcana.herokuapp.com"><h1 className="h1Projects">Rogue-Like Game</h1></a></div>*/}
                <div tabIndex="0" onWheel={this.onScroll} id="scene6Layer2" data-depth="0.9">
                <button className="ProjectsButton" onScroll={this.onScroll} style={buttonUpFrameStyle} onClick={() => scrollToComponent(this.Scene5, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'})}></button>
              	<a href="https://codepen.io/oristar2018/full/JZpEWr/"><h1 className="h1Projects" id="QuoteGenerator" style={{position: "relative", top: "-20vh"}}>Random Quote generator</h1></a>
                <button className="ProjectsButton" onScroll={this.onScroll} style={buttonDownFrameStyle} onClick={() => scrollToComponent(this.Scene3, { offset: 0, align: 'bottom', duration: 250, ease:'inExpo'})}></button></div>
				</div>
  
			</div>
		);
	}
}

export default Projects;