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
		<div class='call-to-action en relative' title='Subscribing is free and you can unsubscribe at any time!'>
			<a class='absolute' target='_blank'></a>
		</div>
	`;
	return await template;
}