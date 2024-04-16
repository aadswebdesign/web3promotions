/** templates/ftr_template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Thai
 */
export async function ftrTemplateThree(){
	const template = `
		<details class='cookie-details open-up relative'>
			<summary class='to-up-caret no-cookie-img relative' data-added-title=',ไม่มีคุกกี้ ,  ภาพมาจาก www.svgrepo.com' title='Open,ไม่มีคุกกี้ ,  ภาพมาจาก www.svgrepo.com'></summary>
			<div class='details-content th fixed display-flex'>
				<p>นอกเหนือจากคุกกี้การทำงานที่เป็นไปได้แล้ว ไม่มีการใช้คุกกี้อื่นๆ!</p>
			</div>
		</details>
		<div class='call-to-action relative display-flex'>
			<div class='relative subscribe' title=''>
				<a class='absolute' target='_blank'></a>			
			</div>
			<div class='relative email' title='คุณสามารถส่งอีเมลถึงฉันได้ที่นี่!'><a class='absolute' target='_blank'></a></div>
		</div>
	`;
	return await template;
}