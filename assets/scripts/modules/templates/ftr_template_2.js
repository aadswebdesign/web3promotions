/** templates/ftr_template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Dutch	
 */
export async function ftrTemplateTwo(){
	const template = `
		<details class='cookie-details open-up relative'>
			<i title=></i>
			<summary class='to-up-caret no-cookie-img relative' data-added-title=', Geen Cookies!, Afbeelding is van www.svgrepo.com' title='Open, Geen Cookies!, Afbeelding is van www.svgrepo.com'></summary>
			<div class='details-content nl fixed display-flex'>
				<p>Naast mogelijke functionele cookies worden er geen andere cookies gebruikt!</p>
			</div>
		</details>
		<div class='call-to-action relative display-flex'>
			<div class='relative subscribe' title='Inschrijven is gratis en u kunt zich op elk moment gratis uitschrijven'>
				<a class='absolute' target='_blank'></a>
			</div>
			<div class='relative email' title='U kunt mij hier een e-mail sturen!'><a class='absolute' target='_blank'></a></div>
		</div>
	`;
	return await template;
}