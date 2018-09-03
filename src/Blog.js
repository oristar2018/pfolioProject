import React, { Component } from "react";
var Lorem = require('react-lorem-component');

class Blog extends Component {
	constructor(props) {
		super(props)
	};


	render() {


		return (
			<div id="blogContainer">
			<div id="blogElement1">
			<Lorem count={30}/>

			</div>

			</div>


			)
	}
};

export default Blog;