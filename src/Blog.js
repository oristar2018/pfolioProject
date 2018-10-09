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
			<div id="article1">
				<div style={{width: "66vw"}}><h1 style={{position: "relative", fontSize: "3rem", left: "10vw", width: "44vw" }}>Why binary search algorithm changes your perspective on array management</h1></div>
				<Lorem style={{textAlign: "justify"}} count={7}/>
				<img style={{width: "33vw", paddingLeft: "10px", paddingRight: "10px"}} src="RRouter.jpg" alt="test" />
				<Lorem count={2} />
			</div>
			

			</div>

			</div>


			)
	}
};

export default Blog;