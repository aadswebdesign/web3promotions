/** templates/ftr_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function ftrTemplateOne(){
	const template = `
		<details class='cookie-details open-up relative'>
			<summary class='to-up-caret relative' data-added-title='' title='Open, No Cookies!'><i class='no-cookie-img absolute'></i></summary>
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