/** assets/scrips/htmlManager/return/html_base.js */
export function createHtmlHelper(_elem, _class, _id, _atts, _content, _tpl,_parent, _replace, log = false){ //
	const _sanitize_html = function (_elem,_str) {
		let _html;
		if(_elem){
			_html = _elem;
			_html.innerHTML = _str;
		}
		return _html;
	};
	const _new_elem = _elem;
	const _create = function(_new_elem){
		return document.createElement(_new_elem);
	}
	const _el = _create(_new_elem);
	if(true === log)
		console.log(`element '<${_elem}></${_elem}>' has been created.`);
	if(_class) _el.classList = _class;
	if(_id) _el.id = _id;
	if(_atts){
		for (const [key, value] of Object.entries(_atts)){
			let modified_key = key.replace('data_', 'data-');
			if(true === log)
				console.table(`attribute: ${modified_key} = ${value}`);
			_el.setAttribute(modified_key,value);
		}
	}
	if(_content){
		if(true === _tpl) _sanitize_html(_el, _content);
		else{
			const _node = document.createTextNode(_content);
			_el.appendChild(_node);
		}
	}
	let __parent, __replace;
	if(_parent){
		__parent = document.querySelector(_parent);
		if(null !== __parent){
			__parent.appendChild(_el);
		}
		if(_replace){
			__replace = document.querySelector(_replace);
			__parent.replaceChild(_el, __replace);	
		}
	}
	else return _el;
}