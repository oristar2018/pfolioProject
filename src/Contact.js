import React, { Component } from "react";


class Contact extends Component {

render() {

return (
	<div id="formContainer">
	    <div id="about">about placeholder, text about me, my life, github link, facebook profile, twitter, hackerrank logo other logos etc..</div>
		<form>
			<h1>Contact</h1>
			<label for="name" className="labels">Name</label>
			<input type="text" id="name" name="name" placeholder="your name" />
			<label for="email" className="labels">Your email</label>
			<input type="email" id="email"  name="email" required placeholder="your email" />
			<label for="message" className="labels">Message:</label>
			<textarea name="message" id="message" maxLength="5000"/>
			<input type="submit" formAction="http://localhost:8888" formMethod="POST" id="submit"/>
		</form>


	</div>
	)
}
}


export default Contact