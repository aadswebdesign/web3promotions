/** templates/ftr_template_0.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Landing page
 */
export async function ftrTemplateNull(){
	const template = `
		<details class='cookie-details open-up relative'>
			<summary class='to-up-caret relative' data-added-title='' title='Open, No Cookies'><i class='no-cookie-img absolute'></i></summary>
			<div class='details-content en fixed display-flex'>
				<p class='relative'>Aside of possible functional cookies, there are no other cookies used!</p>
			</div>
		</details>
		<div class='content-block-tabs relative display-flex'>
			<details class='block-tab one open-up relative' open>
				<summary class='to-down-caret relative' title='Open, Introductie' data-added-title=', Introductie'><i class='absolute'></i></summary>
				<div class='details-content absolute display-none'></div>			
			
			</details>	
			<details class='block-tab two open-up relative'>
				<summary class='to-up-caret relative' title='Open, Introduction' data-added-title=', Introduction'><i class='absolute'></i></summary>
				<div class='details-content absolute display-none'></div>			
			
			</details>	
		</div>
	`;
	return await template;
}

/*
			<details class='block-tab three open-up relative'>
				<summary class='to-up-caret relative' title='Open, การแนะนำ' data-added-title=', การแนะนำ'><i class='absolute'></i></summary>
				<div class='details-content absolute display-none'></div>			
			</details>	



*/

