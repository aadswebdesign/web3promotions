/** templates/ftr_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function ftrTemplateOne(){
	const template = `
		<details class='cookie-details open-up relative'>
			<summary class='to-up-caret no-cookie-img relative' data-added-title=', No Cookies, Image is from www.svgrepo.com' title='Open, No Cookies, Image is from www.svgrepo.com'></summary>
			<div class='details-content en fixed display-flex'>
				<p class='relative'>Aside of possible functional cookies, there are no other cookies used!</p>
			</div>
		</details>
		<div class='call-to-action relative display-flex'>
			<div class='relative subscribe' title='Subscribe is free and you can free unsubscribe at any time.'>
				<a class='absolute' target='_blank'></a>
			</div>
			<div class='relative email' title='You can send me an email here!'><a class='absolute' target='_blank'></a></div>
		</div>
	`;
	return await template;
}

/*
		<div class='call-to-action en relative' title='You can send me an email here!'>
			<a class='absolute' target='_blank'></a>
		</div>




*/