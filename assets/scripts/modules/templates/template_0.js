/** templates/template_0.js */
import * as FT from './../../factory/functions.js';
export async function template_null(){
	const template = `<div id='template_null' class='template-null relative display-flex'>
		<div class='block-left relative display-flex'>
			<div class='my-person-container relative'>
				<img class='relative' src='./assets/graphics/images/my_person.jpg' height='100%' width='100%'  alt='my person'/>
			</div>
		</div><!-- block-left -->
		<div class='block-right relative'>
			<div id='content_en' class='content-block display-flex absolute'>content_en</div><!-- content-block -->
			<div id='content_nl' class='content-block display-none absolute'>content_nl</div><!-- content-block -->
			<div id='content_th' class='content-block display-none absolute'>content_th</div><!-- content-block -->
		</div><!-- block-right -->
	</div><!-- template-null -->
	`;
	
	return await template;
}