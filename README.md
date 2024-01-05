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
* assets
  * graphics  
    * icons 
	* images  
  * scripts
    * index.js
    * factory
    <br/>> js files
    * modules
      * callbacks
      <br/>> js files
      * templates
      <br/>> js files
      * views
      <br/>> js files
    * htmlManager
    <br/>> js files
  * styles
    * index.css
    * modules
    <br/>> css files

<br/>It is a fast and stable website.
<br/>I have built it from the ground up myself. 
<br/>It has a modular approach and built with reusable js functions.
<br/>In future I want to add a database, rest api, a contact form to it and enhance it more... 
<br/>About the topic, you're welcome. There is a lot in it!
<br/>At least a little snippet here, that I just created to solve the vieport hassles is has.
<br/>'it is part of my modules but I stick here this snippet!'
<br/>
...
	const vp_handler = ()=>{
		const vp_height = elems.vp.height;
		const vp_width = elems.vp.width;
		return ()=>{
			elems.body.style.height = `${vp_height}px`;
			elems.body.style.width = `${vp_width}px`;
		};
	};
	vp_handler()();
	window.visualViewport.addEventListener('resize',()=>{
		vp_handler()();
	});
...
<br/>
This make the body element always fit in the viewport!