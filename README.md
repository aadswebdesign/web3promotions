## web3promotions
**About,**
<br/>An informative website about a trustworthy opportunty to create a passive income.
**This md file,**
<br/>Here I will focus just on the html, javascript and css that is used.

**html,**
<br/>It is a simple and responsive layout that is feeded with js templates.

**css,**
<br/>This is vanilla css and there aren't any frameworks involved.

**javascript,**
<br/>This is vanilla js and there aren't any frameworks involved.

**svg**
<br/> the icons, bg images are made with svg.

**structure**
<br/>README.md
<br/>index.html
<br/>* assets
<br/>>	* graphics  
			* icons 
			* images  
<br/>>	* scripts
<br/>		* index.js
<br/>		* factory
<br/>			>js files
<br/>		* modules
<br/>			* callbacks
<br/>				>js files
<br/>			* templates
<br/>				>js files
<br/>		* views
<br/>>			js files
<br/>		* htmlManager
<br/>			>js files
<br/>>	* styles
<br/>		* index.css
<br/>		* modules
<br/>			>css files

<br/>It is a fast and stable website.
<br/>I have built it from the ground up myself. 
<br/>It has a modular approach and built with reusable js functions.
<br/>In future I want to add a database, rest api, a contact form to it and enhance it more... 
<br/>About the topic, you're welcome. There is a lot in it!
<br/>At least a little snippet here, that I just created to solve the vieport hassles is has.
<br/>'and it is part of my modules but I stick here to this snippet!'
<br/>
...
	<br/>const vp_handler = ()=>{
		<br/>const vp_height = elems.vp.height;
		<br/>const vp_width = elems.vp.width;
		<br/>return ()=>{
			<br/>elems.body.style.height = `${vp_height}px`;
			<br/>elems.body.style.width = `${vp_width}px`;
		<br/>};
	};
	<br/>vp_handler()();
	<br/>window.visualViewport.addEventListener('resize',()=>{
		<br/>vp_handler()();
	<br/>});
<br/>
...
<br/>
This make the body element always fit into the viewport!