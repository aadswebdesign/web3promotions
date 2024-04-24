/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {templateMainCb} from './../modules/callbacks/callback_0.js';
export async function pagingHandler(_object_args,__hashes = [..._hashes],__data=[..._data],_log = false){
	const object_args = new Map([['objects',_object_args]]) 
	const obj= object_args.get('objects');
	const target_class = await FT.elQuery(obj.target_class);
	const page = await FT.elQuery(obj.page);
	const block = obj.blocks;//todo
	const bottom_block = await FT.elQuery(block.bottom_block); 
	const top_block = await FT.elQuery(block.top_block); 
	const tab_block = await FT.elQuery(block.page_tabs); 
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(_log === true){
		console.log({target_class});
		console.log({page});
		console.log({bottom_block});
		console.log({top_block});
		console.table(hashes);
		console.table(data);
	}
	let selected_tab;
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, target_class);
		if(currentTab){
			if(_log === true){
				console.log({currentTab});
				console.time(currentTab);
				console.timeLog(currentTab);
				console.timeEnd(currentTab);
			}
			if (currentTab.id !== pageId) currentTab.classList.remove("active");
			const selectedTab = await FT.getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await FT.setContent(page, entry.content);
			await FT.setContent(bottom_block, entry.ftr_content);
			await FT.setContent(top_block, entry.hdr_content);
			await FT.setContent(tab_block, entry.tab_content);
			await entry.callback({...obj},pageId);
		}
	};
	if(target_class){
		target_class.addEventListener('click', function(event){
			if(true === _log){
				console.log(event.target.id);
			}
			if (!event.target.id){
				return;
			}
			update(event.target.id);
		});	
	}
	const pageId = hashes.get(window.location.hash);
	if (pageId){
		await update(pageId);
	}else{
		await templateMainCb({...obj},pageId);
	}
}
export async function resizeHandler(resize_callback = null, resize_elem, _log=false){
	const observer = ()=>{
		if(window.ResizeObserver) {
			const resizeObserver = new ResizeObserver((entries) => {
				if(resize_callback !== null){
					resize_callback(entries,true);
				}
			});
			if(resize_elem !== null){
				resizeObserver.observe(resize_elem);
			}else{
				resizeObserver.disconnect; // needed or not ?
			}	
		}
	};
	//setTimeout(observer(),1000);
	observer();
}
export const detailsHandler = async (_obj, _toggle = false, _log = false)=>{
	const object_args = new Map([['objects',_obj]]);
	const obj = object_args.get('objects');
	const elems = obj.elems;
	let callback;
	if(obj.cb){
		callback = {
			up_close: await obj.cb.up_close ?? null,
			up_open: await obj.cb.up_open ?? null,
			down_close: await obj.cb.down_close ?? null,
			down_open: await obj.cb.down_open ?? null,
		};		
	}
	
	/** pre-defined classes */
	obj.carets = {
		up: 'to-up-caret',
		right: 'to-right-caret',
		down: 'to-down-caret',
		left: 'to-left-caret'
	}
	obj.opens = {
		up: 'open-up',
		right: 'open-right',
		down: 'open-down',
		left: 'open-left',
		up_right: 'open-up-right'
	};
	const details_elems = obj.details_elems ?? null;
	if(details_elems !== null){
		for(const elem of details_elems){
			//const summary = await FT.elQuery('summary', false, elem);
			const content = await FT.elQuery('div.details-content', false, elem);
			elem.addEventListener('toggle', (event) => {
				const summary = elem.querySelector('summary');
				const added_title = summary.dataset.addedTitle;
				switch (true){
					case elem.classList.contains(obj.opens.up):
						if(elem.open){
							summary.classList.replace(obj.carets.up,obj.carets.down);
							summary.title = `Close ${added_title}`;
							if(callback){
								callback.up_open();
							}
						}else{
							summary.classList.replace(obj.carets.down, obj.carets.up);
							summary.title = `Open ${added_title}`;
							if(callback){
								callback.up_close();
							}
						}
					break;
					case elem.classList.contains(obj.opens.right):
						if(elem.open){
							
						}else{
							
						}//todo
					break;
					case elem.classList.contains(obj.opens.up_right):
						if(elem.open){
							
						}else{
							
						}//todo
					break;
					case elem.classList.contains(obj.opens.down):
						if(elem.open){
							summary.classList.replace(obj.carets.down, obj.carets.up);
							summary.title = `Close ${added_title}`;
							if(callback){
								callback.down_open();
							}
						}else{
							summary.classList.replace(obj.carets.up,obj.carets.down);
							summary.title = `Open ${added_title}`;
							if(callback){
								callback.down_close();
							}
						}
					break;
					case elem.classList.contains(obj.opens.left):
						if(elem.open){
							
						}else{
							
						}//todo
					break;
				}
				if(true === _log){
					console.log('elem:', elem );
					console.log('event: ', event);
					//console.log(': ',);
					//console.log(': ', );
					//console.log(':', );
				}
			});
		if(true === _log){
				console.log('summary:',summary);
				console.log('content:', content);
				console.log('added_title:', added_title);
			}
		}
		if(_toggle === true){
			const tabs_handler = (async ()=>{
				details_elems.forEach(target =>{
					target.addEventListener("click", () => {
						details_elems.forEach(tab => {
							if (tab !== target) {
								tab.removeAttribute("open");
							}				
						});
					});
				});
			})();
		}
	}
	if(_log === true){
		console.table(
		details_elems
			//elems
		);
		//console.log(':',  );
		console.log('up_close:', callback.up_close() );
		console.log('up_open:', callback.up_open() );
		console.log('down_close:', callback.down_close() );
		console.log('down_open:', callback.down_open() );
	}
};



