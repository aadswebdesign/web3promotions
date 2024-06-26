/** assets/scrips/factory/actions.js*/
import * as FT from './functions.js';
import * as HL from './handlers.js';
import {templateMainCb} from "./../modules/callbacks/callback_0.js";
import {templateOneCallbacks} from "./../modules/callbacks/callback_1.js";
import {templateTwoCallbacks} from "./../modules/callbacks/callback_2.js";
import {templateThreeCallbacks} from "./../modules/callbacks/callback_3.js";
import {template_null} from "./../modules/templates/template_0.js";
import {templateOne} from "./../modules/templates/template_1.js";
import {templateTwo} from "./../modules/templates/template_2.js";
import {templateThree} from "./../modules/templates/template_3.js";
import {ftrTemplateNull} from "./../modules/templates/ftr_template_0.js";
import {ftrTemplateOne} from "./../modules/templates/ftr_template_1.js";
import {ftrTemplateTwo} from "./../modules/templates/ftr_template_2.js";
import {ftrTemplateThree} from "./../modules/templates/ftr_template_3.js";
import {hdrTemplateOne} from "./../modules/templates/hdr_template_1.js";
import {hdrTemplateTwo} from "./../modules/templates/hdr_template_2.js";
import {hdrTemplateThree} from "./../modules/templates/hdr_template_3.js";
import {tabsTemplateOne} from "./../modules/templates/tabs_template_1.js";
import {tabsTemplateTwo} from "./../modules/templates/tabs_template_2.js";
import {tabsTemplateThree} from "./../modules/templates/tabs_template_3.js";
export const generals = async ()=> {
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	const main = await FT.elQuery('main')
	//todo await FT.userAgentString();
	main.addEventListener('click',(event)=>{
		event.stopPropagation();
	});
	

};
export const pagingSetup = async ()=>{
	const PagingArgs = {
		objects:{
			target_class: '.wrap.container', 
			page: '.page',
			blocks:{
				bottom_block: '.bottom-block',
				top_block: 'header.main',
				page_tabs: '.page-tabs'
			},
		},
		hashes: [
			['#home','menu_item_0'],
			['#english','menu_item_1'],
			['#dutch','menu_item_2'],
			['#thai','menu_item_3']
		],
		data:[//todo MainCb
			['menu_item_0',{url:"#home",content: await template_null(),callback:await templateMainCb,hdr_content: await hdrTemplateOne(),ftr_content: await ftrTemplateNull(),tab_content: null}], 
			['menu_item_1',{url:"#english",content: await templateOne(),callback: await templateOneCallbacks,hdr_content: await hdrTemplateOne(),ftr_content: await ftrTemplateOne(),tab_content: await tabsTemplateOne()}],
			['menu_item_2',{url:"#dutch",content: await templateTwo(),callback: await templateTwoCallbacks,hdr_content: await hdrTemplateTwo(),ftr_content: await ftrTemplateTwo(),tab_content: await tabsTemplateTwo()}],
			['menu_item_3',{url:"#thai",content: await templateThree(),callback:await templateThreeCallbacks,hdr_content: await hdrTemplateThree(),ftr_content: await ftrTemplateThree(),tab_content: await tabsTemplateThree()}],
		] 
	};

	const PA = PagingArgs;
	await HL.pagingHandler({...PA.objects},PA.hashes,PA.data,false);
};
