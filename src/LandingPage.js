import React, { Component } from "react";
import Parallax from 'parallax-js';
import scrollToComponent from 'react-scroll-to-component';


class LandingPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        demo: true,
      };
      this.Scroll = this.Scroll.bind(this),
      this.Touch = this.Touch.bind(this)
      
    };


    componentDidMount() {
    	var scene = document.getElementById('scene');
    	var scene2 = document.getElementById('scene2');
      var sceneParis = document.getElementById('plain');
      var Foreground = document.getElementById('foreground');
      var Foreground2 = document.getElementById('Foreground2');
      console.log(Foreground2)

      var foreground = document.getElementById('content');
      var foreground4 = document.getElementById('foreground4');
      var foreground5 = document.getElementById('foreground5');
      var foreground6 = document.getElementById('foreground6');

      var contentForeground = document.getElementById('contentForeground');
      var ParisForeground = document.getElementById('ParisForeground');
      var quote1 = document.getElementById('quote1');
      var quote2 = document.getElementById('quote2');
      var quote3 = document.getElementById('quote3');
      var quote4 = document.getElementById('quote4');
      var quote5 = document.getElementById('quote5');

    var parallaxInstance = new Parallax(scene, { 
    	relativeInput: true,
    	hoverOnly: true,
      scalarX: 2.5,
      scalarY: 0,
      pointerEvents: true,

    });

     var parallaxInstance2 = new Parallax(scene2, { 
    	relativeInput: true,
    	hoverOnly: true,
       scalarX: 2.5,
      scalarY: 0,
      pointerEvents: true,


    });


    var parallaxInstance3 = new Parallax(sceneParis, {
      relativeInput: true,
      hoverOnly: true,
       scalarX: 2.5,
      scalarY: 0,
      pointerEvents: true,
    });


    var parallaxInstance4 = new Parallax(foreground, {
      relativeInput: true,
      hoverOnly: true,
       scalarX: 2.5,
      scalarY: 1.5,
      pointerEvents: true,
    });

    // window.scrollTo(0, 0);

    var plain = document.getElementById('plain');
   /* var slideIn1 = document.getElementById('slideIn1');
     plain.addEventListener('mouseover', (e) => {
    	slideIn1.style.animation = "1s linear 1 forwards slideIn";
    	
    })
    plain.addEventListener('mouseleave', (e) => {
    	slideIn1.style.left = "0";
    	slideIn1.style.opacity = "1"
    })*/

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
    


    
    

    foreground.addEventListener('mousewheel', (e) => {
      if (e.deltaY > 0) {
      foreground4.style.animation = "3s linear 1 forwards foreground4";
      foreground5.style.animation = "3s linear 1 forwards foreground5";
      foreground6.style.animation = "3s linear 1 forwards foreground6";
     
      mongodbLogo.style.animation = "1.5s linear 1 forwards appear3";
       ReactLogo.style.animation = "1.5s linear 0.25s 1 forwards appear3";
      routerLogo.style.animation = "1.5s linear 0.5s 1 forwards appear3";
      reduxLogo.style.animation = "1.5s linear 0.75s 1 forwards appear3";
      webpackLogo.style.animation = "1.5s linear 1s 1 forwards appear3";
      expressLogo.style.animation = "1.5s linear 1.25s 1 forwards appear3";
      es6Logo.style.animation = "1.5s linear 1.5s 1 forwards appear4";
      d3Logo.style.animation = "1.5s linear 2s 1 forwards appear4";
      nodeLogo.style.animation = "1.5s linear 1.75s 1 forwards appear4";
      
   }
     /* var Dove = document.getElementById('Dove');

      const DoveMove = () => {
        Dove.style.opacity = "1";
        
        Dove.style.animation = "3s linear 1 Dove";
        setTimeout(() => {Dove.style.animation = ""; Dove.style.opacity = "0"}, 1500)
      };

      setInterval( DoveMove, 7500)*/
      
      
      

    })

     Foreground2.addEventListener('mouseover', (e) => {
      
      foreground4.style.animation = "3s linear 1 forwards foreground4";
      foreground5.style.animation = "3s linear 1 forwards foreground5";
      foreground6.style.animation = "3s linear 1 forwards foreground6";
     
      mongodbLogo.style.animation = "1.5s linear 1 forwards appear3";
       ReactLogo.style.animation = "1.5s linear 0.25s 1 forwards appear3";
      routerLogo.style.animation = "1.5s linear 0.5s 1 forwards appear3";
      reduxLogo.style.animation = "1.5s linear 0.75s 1 forwards appear3";
      webpackLogo.style.animation = "1.5s linear 1s 1 forwards appear3";
      expressLogo.style.animation = "1.5s linear 1.25s 1 forwards appear3";
      es6Logo.style.animation = "1.5s linear 1.5s 1 forwards appear4";
      d3Logo.style.animation = "1.5s linear 2s 1 forwards appear4";
      nodeLogo.style.animation = "1.5s linear 1.75s 1 forwards appear4";
      
   
     /* var Dove = document.getElementById('Dove');

      const DoveMove = () => {
        Dove.style.opacity = "1";
        
        Dove.style.animation = "3s linear 1 Dove";
        setTimeout(() => {Dove.style.animation = ""; Dove.style.opacity = "0"}, 1500)
      };

      setInterval( DoveMove, 7500)*/
      
      
      

    });

     ParisForeground.addEventListener('mousewheel', (e) => {
      if (e.deltaY > 0) {
        quote1.style.animation = "1s ease-out 1 forwards quote1Anim";
        quote2.style.animation = "1s ease-out 1s 1 forwards quote2Anim";
        quote3.style.animation = "1s ease-out 2s 1 forwards quote3Anim";
        quote4.style.animation = "1s ease-out 3s 1 forwards quote4Anim";
        quote5.style.animation = "1s ease-out 4s 1 forwards quote5Anim";


      }
     })

     contentForeground.addEventListener('mouseover', (e) => {
      
        quote1.style.animation = "1s ease-out 1 forwards quote1Anim";
        quote2.style.animation = "1s ease-out 1s 1 forwards quote2Anim";
        quote3.style.animation = "1s ease-out 2s 1 forwards quote3Anim";
        quote4.style.animation = "1s ease-out 3s 1 forwards quote4Anim";
        quote5.style.animation = "1s ease-out 4s 1 forwards quote5Anim";


      
     })




     /*if (this.state.demo === true) {setTimeout( () => {scrollToComponent(this.Plain, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});}, 3000 );
    setTimeout( () => {scrollToComponent(this.Content, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});}, 7000 );
    setTimeout( () => {scrollToComponent(this.Foreground2, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'});
    foreground4.style.animation = "3s linear 1 forwards foreground4";
      foreground5.style.animation = "3s linear 1 forwards foreground5";
      foreground6.style.animation = "3s linear 1 forwards foreground6";
      ReactLogo.style.animation = "1.5s linear 1 forwards appear3";
      routerLogo.style.animation = "1.5s linear 0.25s 1 forwards appear3";
      reduxLogo.style.animation = "1.5s linear 0.5s 1 forwards appear3";
      webpackLogo.style.animation = "1.5s linear 0.75s 1 forwards appear3";
      expressLogo.style.animation = "1.5s linear 1s 1 forwards appear3";
      es6Logo.style.animation = "1.5s linear 1.25s 1 forwards appear4";
      d3Logo.style.animation = "1.5s linear 1.5s 1 forwards appear4";
      nodeLogo.style.animation = "1.5s linear 1.75s 1 forwards appear4";
      mongodbLogo.style.animation = "1.5s linear 2.5s 1 forwards appear4";
      this.setState({demo: false});
   


  }, 11000)};*/

    var OriginRightUp = document.getElementById('OriginRightUp');
    var OriginRightDown = document.getElementById('OriginRightDown');

    ParisForeground.addEventListener('mouseover', (e) => {
      OriginRightUp.style.animation = "1s linear 1 forwards OriginUp";
      OriginRightDown.style.animation = "1s linear 1 forwards OriginDown";

    } )

    Foreground.addEventListener('mousewheel', (e) => {
      if (e.deltaY > 0) {
     // console.log('goes here foreground');
      OriginRightUp.style.animation = "1s linear 1 forwards OriginUp";
      OriginRightDown.style.animation = "1s linear 1 forwards OriginDown";

   }});



 

    };  

    Touch(e) {
     
    }


    Scroll(e) {
   
   e.preventDefault();
   console.log('fires');

   if (e.deltaY > 0) {
      switch(e.target.id) {
        case "foreground":
        scrollToComponent(this.PlainForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

         case "ParisForeground":
        scrollToComponent(this.ContentForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;


        case "contentForeground":
        scrollToComponent(this.Foreground2, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

        case "Foreground2":
        scrollToComponent(this.Foreground2, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'});
        break;

        default:
        return null
      }

    }

    if (e.deltaY < 0) {
      switch(e.target.id) {
        case "foreground":
        scrollToComponent(this.Foreground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

         case "ParisForeground":
        scrollToComponent(this.Foreground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

        case "contentForeground":
        scrollToComponent(this.PlainForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

        case "Foreground2":
        scrollToComponent(this.ContentForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'});
        break;

        default:
        return null
      }

    }



    }
    


	render() {
  let body = document.querySelector('body');
  body.addEventListener('touchmove', (e) => {e.preventDefault()}, {passive: false})
	var TowerStyle = {

   


  }

  function TechAnim() {
           var foreground = document.getElementById('content');
           var foreground4 = document.getElementById('foreground4');
           var foreground5 = document.getElementById('foreground5');
           var foreground6 = document.getElementById('foreground6');
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

    foreground4.style.animation = "3s linear 1 forwards foreground4";
      foreground5.style.animation = "3s linear 1 forwards foreground5";
      foreground6.style.animation = "3s linear 1 forwards foreground6";
     
      mongodbLogo.style.animation = "1.5s linear 1 forwards appear3";
       ReactLogo.style.animation = "1.5s linear 0.25s 1 forwards appear3";
      routerLogo.style.animation = "1.5s linear 0.5s 1 forwards appear3";
      reduxLogo.style.animation = "1.5s linear 0.75s 1 forwards appear3";
      webpackLogo.style.animation = "1.5s linear 1s 1 forwards appear3";
      expressLogo.style.animation = "1.5s linear 1.25s 1 forwards appear3";
      es6Logo.style.animation = "1.5s linear 1.5s 1 forwards appear4";
      d3Logo.style.animation = "1.5s linear 2s 1 forwards appear4";
      nodeLogo.style.animation = "1.5s linear 1.75s 1 forwards appear4";

      return 'done'
  }


  function TechAnim2() {
         var contentForeground = document.getElementById('contentForeground');
      var ParisForeground = document.getElementById('ParisForeground');
      var quote1 = document.getElementById('quote1');
      var quote2 = document.getElementById('quote2');
      var quote3 = document.getElementById('quote3');
      var quote4 = document.getElementById('quote4');
      var quote5 = document.getElementById('quote5');

        quote1.style.animation = "1s ease-out 1s forwards quote1Anim";
        quote2.style.animation = "1s ease-out 2s 1 forwards quote2Anim";
        quote3.style.animation = "1s ease-out 3s 1 forwards quote3Anim";
        quote4.style.animation = "1s ease-out 4s 1 forwards quote4Anim";
        quote5.style.animation = "1s ease-out 5s 1 forwards quote5Anim";    
  }

 function TechAnim3() {
   var OriginRightUp = document.getElementById('OriginRightUp');
   var OriginRightDown = document.getElementById('OriginRightDown');
   OriginRightUp.style.animation = "1s linear 1 forwards OriginUp";
   OriginRightDown.style.animation = "1s linear 1 forwards OriginDown";
 }


      let buttonDownFrameStyle = {
  height: "5vh",
  width: "2.5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(90deg)",
  color: "red",
  border: "none",
  outline: "none",
  color: "transparent"
};

let buttonUpFrameStyle = {
  height: "5vh",
  width: "2.5vw",
  justifySelf: "flex-end",
  position: "relative",
  background: "url('arrow.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  transform: "rotate(-90deg)",
   border: "none",
  outline: "none",
  color: "transparent"

};

    return (
    	<div id="LandingContainer" onTouchMove={this.Touch} onWheel={this.Scroll}>
    	<div id="scene" style={{background: "#18121E", width: "100vw", overflowX: "hidden"}}>
  
  <div data-depth="0.2" id="layer1" style={{background: "#18121E", width: "100vw", overflowX: "hidden"}}></div>
  <div data-depth="0.6" id="navTextContainer"><p id="navText">Use mousewheel or click/tap buttons to navigate</p></div>
  <div onTouchMove={this.Touch} id="foreground" onWheel={this.Scroll} ref={(div) => {this.Foreground = div}} data-depth="0.9"><h1 id="foreground1">Hello</h1><h1 id="foreground2">I'm Benoit-Henri</h1><h1 id="foreground3">...and i provide Solutions</h1></div>
</div>
<div onWheel={this.Scroll} id="buttonDownDiv"><button className="animButton" onClick={() => {scrollToComponent(this.Plain, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'}); TechAnim3()}} style={buttonDownFrameStyle}>Down</button></div>
<div ref={(div) => {this.Plain = div}} onWheel={this.Scroll} className="Plain" id="plain">

<div id="Background" style={{ height: "90vh", width: "55vw", background: "url('aquarelle.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 100%"}}></div>
<div id="BackgroundAnims"  style={{ height: "90vh", width: "50vw"}}><img id="Dove" style={{height: "5vh", width: "5vw"}} alt="Dove" src="Dove.gif"/></div>
<div id="ParisBackground" data-depth="0.3"><img id="Eiffel" style={TowerStyle} src="EiffelTower.png" alt="Eiffel tower"/>
</div>
<div id="OriginContainer" data-depth="0.4"><div id="OriginLeft"></div><div id="OriginRight"><div id="OriginRightUp"><p id="OriginText">I live and work in Paris.</p></div><div id="OriginRightDown"><p id="OriginText2">I also enjoy working abroad. <br/> Switzerland, England, Luxembourg...</p></div></div></div>
<div id="ParisSublayers2" data-depth="0.5"><img style={{width: "8.5vw", height: "15vh", position: "relative", top: "69vh"}} src="oak.png" alt="Tree" /><img style={{width: "8.5vw", height: "15vh",  position: "relative", top: "69vh"}} src="oak.png" alt="Tree"/><img style={{width: "8.5vw", height: "15vh",  position: "relative", top: "69vh"}} src="oak.png" alt="Tree"/>
<img style={{width: "12.5vw", height: "20vh", position: "relative", top: "70vh"}} src="oak.png" alt="Tree"/><img style={{width: "8.5vw", height: "15vh",  position: "relative", top: "69vh", left: "-5vw"}} src="oak.png" alt="Tree"/><img style={{width: "8.5vw", height: "15vh",  position: "relative", top: "69vh", left: "-4vw"}} src="oak.png" alt="Tree"/></div>
<div id="Man" style={{width: "50vw", height: "90vh"}} data-depth="0.6"><img alt="walking man" style={{height: "10vh", width: "6.5vw", position: "relative", top: "70vh", left: "21.5vw"}} id="ManGif" src="WalkBack.gif"/></div>
<div id="ParisSublayers" style={{width: "50vw", height: "90vh"}} data-depth="0.7"><img style={{width: "12.5vw", height: "20vh", position: "relative", top: "70vh"}} src="oak.png" alt="Tree"/><img style={{width: "12.5vw", height: "20vh",  position: "relative", top: "70vh"}} src="oak.png" alt="Tree"/><img style={{width: "12.5vw", height: "20vh",  position: "relative", top: "70vh"}} src="oak.png" alt="Tree"/>
<img style={{width: "12.5vw", height: "20vh", position: "relative", top: "70vh"}} src="oak.png" alt="Tree"/>
</div>
<div onTouchMove={this.Touch} ref={(div) => {this.PlainForeground = div}} onWheel={this.Scroll} id="ParisForeground" data-depth="0.8"><button className="animButton" id="ParisButton1" onClick={() => {scrollToComponent(this.Foreground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}} style={buttonUpFrameStyle}>arrow Up</button><button className="animButton" id="ParisButton2" onClick={() => {scrollToComponent(this.ContentForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'}); TechAnim2()}} style={buttonDownFrameStyle}>arrow Down</button></div>

</div>
<section id="content">
{/*<p id="slideIn1">I am a self taught full-stack Javascript developper.</p>
<p>I enjoy cracking problems, thinking about the best possible design patterns and maximizing efficiency.</p>
<p>To me, coding is no only a means of implementing an algorithm or solution to a problem but also an artform. Like litteral language translation, the wording and the turn of phrase you employ will greatly affect your reader/interlocutor. </p>
<p>I always believe in making my code better.</p>*/}
<div className="contentDiv" data-depth="0.2"><div className="quotes" id="quote1">I am full-stack developper.</div></div>
<div className="contentDiv" data-depth="0.4"><div className="quotes" id="quote2">I enjoy cracking problems, thinking about the best possible design patterns and maximizing efficiency.</div></div>
<div className="contentDiv" data-depth="0.6"><div className="quotes" id="quote3">To me, coding is no only a means of implementing an algorithm or solution to a problem but also an artform.</div></div>
<div className="contentDiv" data-depth="0.7"><div className="quotes" id="quote4">Like litteral language translation, the wording and the turn of phrase you employ will greatly affect your reader/interlocutor.</div> </div>
<div className="contentDiv" data-depth="0.8"><div className="quotes" id="quote5">I always believe in making my code better.</div></div>


<div  id="contentForeground" data-depth="0.9" ref={(div) => {this.ContentForeground = div}} onWheel={this.Scroll}><button className="animButton" id="contentButton1"  onClick={() => {scrollToComponent(this.PlainForeground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}} style={buttonUpFrameStyle}>up button</button><button className="animButton" id="contentButton2" onClick={() => {scrollToComponent(this.ButtonWorks, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'}); TechAnim()}} style={buttonDownFrameStyle}>down button</button></div>


</section>

<div id="scene2"  ref={(div) => {this.ButtonWorks = div}} style={{background: "white"}} >
  <div data-depth="0.1" id="layer2" style={{background: "#18121E"}}></div>
  <div data-depth="0.4" id="scene2Layer2">
  <img src="mongodb2.png" style={{height: "30vh"}}className="techImages" id="mongodbLogo" alt="tech logo" />
  <img src="reactL.png" className="techImages" style={{filter: "invert(100%)"}}id="reactLogo" alt="tech logo"/>
  <img src="RRouter.jpg" className="techImages" id="routerLogo" alt="tech logo"/>
  <img src="ReduxLogo.png" className="techImages" id="reduxLogo" alt="tech logo"/>
  <img src="webpack.png" className="techImages" id="webpackLogo" alt="tech logo"/>
  <img src="express2.png" className="techImages" id="expressLogo" alt="tech logo"/>
  <img src="ES62.png" style={{marginRight: "1vw"}} className="techImages" id="es6Logo" alt="tech logo"/>
  <img src="NodeJsLogo.png" className="techImages" id="nodeLogo" alt="tech logo"/>
  <img src="D3.png" className="techImages" id="d3Logo" alt="tech logo"/>
  

  </div>
  <div onTouchMove={this.Touch} onWheel={this.Scroll} ref={(div) => {this.Foreground2 = div}} id="Foreground2" data-depth="0.9"><h1 id="foreground4">And here are</h1><h1 id="foreground5">The technologies that I've learnt and love using...everyday</h1><h1 id="foreground6"></h1>
  <button id="TechListUpButton" onClick={() => {scrollToComponent(this.Foreground, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}} style={buttonUpFrameStyle}>Top</button></div>
</div>


</div>
)

	}


}

export default LandingPage