/** callbacks/callbacks.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export async function callbacks(){
	const elems ={
		vp: window.visualViewport,
		main: await FT.elQuery('main'),
		body: document.body,
	};
	const top_block = (async()=>{
		const tb_obj = {};
		tb_obj.elems = elems;
		tb_obj.top = await FT.elQuery('section.top');//
		tb_obj.parent = await FT.elQuery('.page-tabs',false, tb_obj.top);
		tb_obj.details_elems = await FT.elQuery('div.details-block details.page-tab',true,tb_obj.elems.parent);
		tb_obj.details_blocks = await FT.elQuery('div.details-block',true,tb_obj.parent); 
		tb_obj.details_rulers = await FT.elQuery('div.details-block div.ruler',true,tb_obj.parent);
		const top_block_down_open = async()=>{
			tb_obj.elems.main.style.opacity = 0.1;
		};
		const top_block_down_close = async()=>{
			tb_obj.elems.main.style.opacity = 1;
		};
		tb_obj.cb = {
			down_close : top_block_down_close,
			down_open : top_block_down_open
		};
		await HL.detailsHandler({...tb_obj},true).then(()=>{
			if(tb_obj.details_blocks){
				for (const elem of tb_obj.details_blocks){
					const detail = elem.querySelector('details');
					const ruler = elem.querySelector('div.ruler');
					const details_content = detail.querySelector('div.details-content');
					detail.addEventListener('toggle', (event) => {
						if(detail.open){
							ruler.style.display = 'block';
							HL.resizeHandler(null, tb_obj.elems.main, true);
							HL.resizeHandler(null, tb_obj.top, true);
							HL.resizeHandler(null, elem, true);
							HL.resizeHandler(null, ruler, true);
							const dom_manipulator = ()=>{
								return (_log = false)=>{
									const main_atts = {
										height: tb_obj.elems.main.offsetHeight,
										width: tb_obj.elems.main.offsetWidth,
										top: tb_obj.elems.main.offsetTop,
										left: tb_obj.elems.main.offsetLeft,
										data_width: tb_obj.elems.main.dataset.width,
									};
									const top_section_atts = {
										height: tb_obj.top.offsetHeight,
										width: tb_obj.top.offsetWidth,
										top: tb_obj.top.offsetTop,
										left: tb_obj.top.offsetLeft,
									};
									const details_block_atts = {
										height: elem.offsetHeight,
										width: elem.offsetWidth,
										top: elem.offsetTop,
										left: elem.offsetLeft,
									};
									const ruler_atts = {
										height: ruler.offsetHeight,
										width: ruler.offsetWidth,
										top: ruler.offsetTop,
										left: ruler.offsetLeft,
										data_width:ruler.dataset.width
									};
									const details_content_atts ={
										height: details_content.offsetHeight,
										width: details_content.offsetWidth,
										top: details_content.offsetTop,
										left: details_content.offsetLeft,
									};
									const details_content_top = top_section_atts.height + 5;
									details_content.style.top = `${details_content_top}px`;
									const ruler_width = FT.deduct_percentage(top_section_atts.width,ruler_atts.data_width);
									ruler.style.width = `${ruler_width}px` ;
									ruler.style.minWidth = 310 +'px';
									details_content.style.width = `${ruler_width}px`;
									details_content.style.maxHeight = `${main_atts.height -10}px`;
									details_content.style.minWidth = 310 +'px';										
									details_content.style.maxWidth = 'fit-content';										
									if(true === _log){
										console.log('details_content: ',details_content);
										//console.log(': ', );
										//console.log(':', );
									}	
								}
							}
							dom_manipulator()();
							window.visualViewport.addEventListener('resize',()=>{
								dom_manipulator()();
							});
						}else{
							ruler.style.display = 'none';
							HL.resizeHandler(null, null);
						}
						
					});
				}
			}
		});
	})();
	const bottom_block = (async()=>{
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
		await HL.detailsHandler({...bb_obj}).then(()=>{
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
							window.visualViewport.addEventListener('resize',()=>{
								dom_manipulator()();
							});
						}
					});
				}
			}
		});
	})();
	const call_to_action = (async ()=>{
		const bottomBlock = await FT.elQuery('section.bottom div.bottom-block');
		const anchorContainer = await FT.elQuery('div.call-to-action', false, bottomBlock );
		//email block
		const email = await FT.elQuery('div.email', false, anchorContainer ); 
		const email_a_elem = await FT.elQuery('a', false, email);
		email_a_elem.href = 'mailto:gy4v8ufwe@mozmail.com';
		//subscribe block
		const subscribe = await FT.elQuery('div.subscribe', false, anchorContainer ); 
		const subscribe_a_elem = await FT.elQuery('a', false, subscribe);
		//MVI links
		const direct_id = 231;
		const site_url = 'https://platform.mvi.world'; //has to be checked
		//LEFT SIDE LINK JS
		const left_side_id = 0;
		const signature_left = '63cd79d2f42960262e946b91fe32ef1402eb9785d4143762417a70172b139928'; 	
		const leftSideLink = `${site_url}/register?directId=${direct_id}&refId=leftright&side=${left_side_id}&signature=${signature_left}`;
		//RIGHT SIDE LINK JS
		const right_side_id = 1; 
		const signature_right = '3453878d9ddbb57a3fc730614771472edfd097b4aa183bb22536708acfa6c977';
		const rightSideLink =`${site_url}/register?directId=${direct_id}&refId=leftright&side=${right_side_id}&signature=${signature_right}`;
		subscribe_a_elem.href = rightSideLink;
	})();// is an  IIFE (Immediately Invoked Function Expression)
}