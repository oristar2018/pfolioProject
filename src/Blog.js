import React, { Component } from "react";
var Lorem = require('react-lorem-component');

class Blog extends Component {
	constructor(props) {
		super(props)
	};

	componentDidMount() {

		let navBar = document.getElementById('mainNavBar');
		navBar.style.background = "black"
	}

	render() {


		return (

			<div id="blogContainer">
			<div id="blogElement1">
			
				<h1 className="blogH1">A couple of useful tricks</h1>
				<p className="articleText">Hey guys!

So here's a nifty little trick that is not explained everywhere.

So let's say you want your element's scrollbar to start in a Y given position when you element is mounted/loaded.

This is especially relevant when you are dealing with tall components with the overflow-Y: scroll rule. 

There is a property of the element called "scrollTop" that will give you the Y position of your scrollBar.

you can modify it by incrementing or decrementing it from 0 (top) to bottom (+= xAmount of pixels). 

If your element has a set height that is not in relative units (vh/vw), you can simply adjust the property.

But let's imagin that your element's height is set on auto or written in relative viewport units (vh).

You can make the scrollbar start at the bottom just by using :
				<br/><br/><code>element.scrollTop = element.scrollHeight;
</code><br/><br/>


element.scrollHeight gives you the absolute height of your element including overflow (hidden or not);

if you want to use only the portion of the component that is in view use : 
<br/><br/><code>element.scrollTop = element.clientHeight 
</code><br/><br/>

clientHeight includes the element's css height + padding;

you can also play with these properties to adjust the position :

50% is scrollHeight/2 or clientHeight/2 and so on.. 
</p>
				<img className="articleText" style={{width: "33vw", paddingLeft: "10px", paddingRight: "10px"}} src="RRouter.jpg" alt="test" />
		

					<p className="articleText">
				Hey guys!

Here's a trick related to focusing an element.

Let's say you want an element to gain focus onLoad of your page, you could simply call .focus() on the element itself, set its tabIndex attribute to 0 
and that would do the trick.

Even simplier, you could give it the "autofocus" attribute.

However, let's say you're building a page where the current focused element must never lose focus..

In that case, you need to use the "blur" event and listen for it on the element. 

Your would write something in the lines of :

<br/><br/><code>
element.addEventListener('blur', function(e) &#123; "this.focus()" &#125;);
</code><br/><br/>

this way the element will never lose focus as the focusOut event will occur but the blur event will refocus the element immediately.

				</p>



				
			</div>
			

			

			</div>


			)
	}
};

export default Blog;