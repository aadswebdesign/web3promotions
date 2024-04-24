/** callbacks/callback_0.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {web3d_specs} from './../creations_0/web_3d_specs.js';
import{ftrTemplateNull} from './../templates/ftr_template_0.js';
import {content_en} from '../templates/template_0_en.js';
import {content_nl} from '../templates/template_0_nl.js';
import {content_th} from '../templates/template_0_th.js';
export const templateMainCb = async (_obj,page_id)=>{
	const ftrContent = await ftrTemplateNull();
	const ftrBlock = await FT.elQuery('.bottom-block');
	await FT.setContent(ftrBlock,ftrContent);
	const elems ={
		vp: window.visualViewport,
		main: await FT.elQuery('main'),
		body: document.body,
	};
	const top_block = (async()=>{
		const main = elems.main;
		main.style.opacity = 1;
	})();
	const bottom_block = (async ()=>{
		const bb_obj = {};
		bb_obj.elems = elems;
		bb_obj.elems.bottom = await FT.elQuery('section.bottom');
		bb_obj.elems.parent = await FT.elQuery('div.bottom-block', false, bb_obj.elems.bottom); 
		bb_obj.details_elems = await FT.elQuery('details.cookie-details',true,bb_obj.elems.parent);
		const cookie_up_open = async()=>{
			bb_obj.elems.main.style.opacity = 0.1;
		};
		const cookie_up_close = async()=>{
			bb_obj.elems.main.style.opacity = 1;
		};
		bb_obj.cb = {
			up_close : cookie_up_close,
			up_open : cookie_up_open
		};
		await HL.detailsHandler({...bb_obj},false).then(()=>{
			if(bb_obj.details_elems){
				for (const detail of bb_obj.details_elems){
					const details_content = detail.querySelector('div.details-content');
					detail.addEventListener('toggle', event => {
						if(detail.open){
							HL.resizeHandler(null, bb_obj.elems.main, true);
							HL.resizeHandler(null, bb_obj.elems.bottom, true);
							HL.resizeHandler(null, bb_obj.elems.parent, true);
							HL.resizeHandler(null, details_content, true);
							const dom_manipulator = ()=>{
								return (_log = false)=>{
									const vp_atts = {
										height: bb_obj.elems.vp.height,
										width: bb_obj.elems.vp.width,
										top: bb_obj.elems.vp.offsetTop,
										left: bb_obj.elems.vp.offsetLeft,
									};
									const main_atts = {
										height: bb_obj.elems.main.offsetHeight,
										width: bb_obj.elems.main.offsetWidth,
										top: bb_obj.elems.main.offsetTop,
										left: bb_obj.elems.main.offsetLeft,
										data_width: bb_obj.elems.main.dataset.width,
									};
									const bottom_section_atts = {
										height: bb_obj.elems.bottom.offsetHeight,
										width: bb_obj.elems.bottom.offsetWidth,
										top: bb_obj.elems.bottom.offsetTop,
										left: bb_obj.elems.bottom.offsetLeft,
									};
									const content_atts = {
										height: details_content.offsetHeight,
										width: details_content.offsetWidth,
										top: details_content.offsetTop,
										left: details_content.offsetLeft,
									};
									const vp_height = vp_atts.height;
									const content_top = bottom_section_atts.height + 4;//todo adjust this for chrome browser
									const content_width = bottom_section_atts.width -16;
									details_content.style.bottom = `${content_top}px`;
									details_content.style.width = `${content_width}px`;
									details_content.style.maxWidth = 'fit-content';
									if(true === _log){
										console.table({'vp_atts': vp_atts});
										console.log('content_top:', content_top);
										console.log('details_content:', details_content);
										console.log('vp_height:', vp_height);
									}
								};
							};
							dom_manipulator()();
							elems.vp.addEventListener('resize',()=>{
								dom_manipulator()();
							});
						}
					});
				}
			}
		});
	})();
	const bottom_tabs = (async()=>{
		const bt_obj = {};
		bt_obj.elems = elems;
		bt_obj.elems.parent =  await FT.elQuery('div.content-block-tabs',false, bt_obj.elems.block); 
		bt_obj.details_elems = await FT.elQuery('details.block-tab', true, bt_obj.elems.parent );
		const template_null = await FT.elQuery('div.block.page .template-null', false, bt_obj.elems.main ); 
		const block_right = await FT.elQuery('div.block-right', false, template_null);  
		const content_block = await FT.elQuery('div.content-block', true, block_right);
		const block_en = content_block[0];
		const block_nl = content_block[1];
		const block_th = content_block[2];
		const details_nl = bt_obj.details_elems[0];
		const details_en = bt_obj.details_elems[1];
		//const details_th = bt_obj.details_elems[2];
		const bottom_tabs_up_open = async()=>{
			if(details_nl.open){
				block_nl.classList.replace('display-none','display-flex');
				await FT.setContent(block_nl, await content_nl());
			}
			if(details_en.open){
				block_en.classList.replace('display-none','display-flex');
				await FT.setContent(block_en, await content_en());
			}
			//if(details_th.open){
				//block_th.classList.replace('display-none','display-flex');
				//await FT.setContent(block_th, await content_th());
			//}
		};
		const bottom_tabs_up_close = async()=>{
			if(!details_nl.open){
				block_nl.classList.replace('display-flex','display-none');
			}
			if(!details_en.open){
				block_en.classList.replace('display-flex','display-none');
			}
			//if(!details_th.open){
				//block_th.classList.replace('display-flex','display-none');
			//}
			if(!details_en.open){ // && !details_th.open
				details_nl.setAttribute('open','');
			}
		};
		bt_obj.cb = {
			up_open : bottom_tabs_up_open,
			up_close : bottom_tabs_up_close,
		};
		await HL.detailsHandler({...bt_obj},true);
	})();
	const vp_handler = ()=>{
		const vp_height = elems.vp.height;
		const vp_width = elems.vp.width;
		return ()=>{
			elems.body.style.height = `${vp_height}px`;
			elems.body.style.width = `${vp_width}px`;
			//console.log('elems.body:', elems.body);
		};
	};
	vp_handler()();
	elems.vp.addEventListener('resize',()=>{
		vp_handler()();
	});
};