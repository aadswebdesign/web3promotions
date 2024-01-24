/** templates/ftr_template_0.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Landing page
 */
export async function ftrTemplateNull(){
	const template = `
		<details class='cookie-details open-up relative'>
			<summary class='to-up-caret no-cookie-img relative' data-added-title=', No Cookies, Image is from www.svgrepo.com' title='Open, No Cookies, Image is from www.svgrepo.com'></summary>
			<div class='details-content en fixed display-flex'>
				<p class='relative'>Aside of possible functional cookies, there are no other cookies used!</p>
			</div>
		</details>
		<div class='content-block-tabs relative display-flex'>
			<details class='block-tab one open-up relative' open>
				<summary class='to-down-caret relative' title='Open, Introduction' data-added-title=', Introduction'><i class='absolute'></i></summary>
				<div class='details-content absolute display-none'></div>			
			</details>	
			<details class='block-tab two open-up relative'>
				<summary class='to-up-caret relative' title='Open, Introductie' data-added-title=', Introductie'><i class='absolute'></i></summary>
				<div class='details-content absolute display-none'></div>			
			</details>	
		</div>
	`;
	return await template;
}