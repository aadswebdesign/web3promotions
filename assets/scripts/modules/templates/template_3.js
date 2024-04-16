/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
/**
 * @description: Thai	
 */
export async function templateThree(){
	const template = `<div id='templateThree' class='template-three relative'>
		<div class='relative content-block display-flex'>
			<article class='notifications relative'>
			</article>
			<header class='relative'><h2>todo</h2></header>
			<article class='relative'>
			</article>
			<hr/>
			<header class='relative'><h2></h2></header>
			<article class='relative'>
			</article>
			<hr/>
			<header class='relative'><h2></h2></header>
			<article class='relative'>
			<hr/>
			<header class='relative'><h2></h2></header>
		</div><!--content-block -->
	</div><!--template-three -->`;
	return await template;
}