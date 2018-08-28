import React, { Component } from "react";


class Contact extends Component {

render() {

return (
	<div id="formContainer">
	    <div id="about">
	    <div id="About">
	    	<h1 id="AboutH1">About</h1>
	    	<div id="AboutFlavourText">I am a self taught full-stack developper. I began my journey with Python in 2015 and then fell in love with javascript. 
	    	I started practicing with the Viking code school and the Odin project and switched to freecodecamp where i completed the main certifications.
	    	<br/><br/> 
	    	Since then, i've been learning all that i can get my hands on: from server conception and database management to modern front-end frameworks and algorithm solving. 
            <br/><br/>
            Before all that, I was an Opera Singer(Tenor) for 10 years. I toured in Europe and all over France.  
	    	</div>
	    </div>
	    <div id="Links">
	    <a href="https://github.com/oristar2018"><img className="LinksImage" src="cat.png" alt="Link"/></a>
	    <a href="https://www.hackerrank.com/dambreville?hr_r=1"><img className="LinksImage" src="HR.png" alt="Link"/></a>
	    <a href="https://www.freecodecamp.org/oristar2018"><img className="LinksImage" src="FCC.jpeg" alt="Link"/></a>
	    <a href="https://codepen.io/oristar2018/"><img className="LinksImage" src="codepen.png" alt="Link"/></a>
	    </div></div>
		<form>
			<h1>Contact</h1>
			<label for="name" className="labels">NAME :</label>
			<br/>
			<input className="inputs" type="text" id="name" name="name" placeholder="your name" />
			<br/>
			<label for="email" className="labels">EMAIL ADRESS :</label>
			<br/>
			<input className="inputs" type="email" id="email"  name="email" required placeholder="your email" />
			<br/>
			<label for="message" className="labels">MESSAGE :</label>
			<br/>
			<textarea name="message" placeholder="What can I help you with?" id="message" maxLength="5000"/>
			<br/>
			<input type="submit" formAction="http://localhost:8888" formMethod="POST" id="submit"/>
		</form>


	</div>
	)
}
}


export default Contact