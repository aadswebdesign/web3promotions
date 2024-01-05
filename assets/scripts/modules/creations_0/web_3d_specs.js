/** assets/scripts/modules/creations_0/web_3d_specs.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import * as SE from './../../svgManager/svgElements.js';
export const web3d_specs = async (_obj, _log = false)=>{
	const object_args = new Map([['objects',_obj]]);
	const obj = object_args.get('objects');
	const parent_elem = obj.elems.template_null;
	const svg_container = await FT.elQuery('.svg-container', false, parent_elem);
	const resize_svg_elem = (entries)=>{};
	HL.resizeHandler(resize_svg_elem, obj.elems.page, true);
	let svg_args;
	const svg_manipulator = () =>{
		return (_log)=>{
			const parent_elem_dim = {
				width: parent_elem.offsetWidth,
				height: parent_elem.offsetHeight
			};
			const svg_ctn_width = FT.deduct_percentage(parent_elem_dim.width, 20);
			const svg_ctn_height = FT.deduct_percentage(parent_elem_dim.height, 50);
			const svg_ctn_top_calc = parent_elem_dim.height - svg_ctn_height; 
			const svg_ctn_top = svg_ctn_top_calc / 2;
			const svg_ctn_left_calc = parent_elem_dim.width - svg_ctn_width; 
			const svg_ctn_left = svg_ctn_left_calc / 2;
			svg_container.style.width = `${svg_ctn_width}px`;
			//svg_container.style.maxWidth = `855px`;
			svg_container.style.height = `${svg_ctn_height}px`;
			//svg_container.style.maxHeight = `335px`;
			//svg_container.style.top = `${svg_ctn_top}px`; 
			svg_container.style.left = `${svg_ctn_left - 10 }px`; 
			svg_args={viewBox:`0 0 480 250`,width:'100%',height:'100%',x:0,y:0, preserveAspectRatio:"none"};
			if(true === _log){
				console.log('svg_ctn_width: ', svg_ctn_width);
				console.log('svg_ctn_height: ', svg_ctn_height);
				//console.log(': ', );
			}
			
		};
	};
	svg_manipulator()();
	window.visualViewport.addEventListener('resize',()=>{
		svg_manipulator()();					
	});
	const drop_shadow = {stdDeviation:"0.4",dy:"0.6",dx:"0.4"};
	const svg_styles = `
		.base-style{fill: none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1 }
		.fill-1{fill: rgb(102,102,102);}
		.fill-2{fill: rgb(167,167,167);}
		.fill-3{fill: rgb(234,234,234);}
		.stroke-set-1{ stroke: rgb(167,167,167);stroke-width:3px;}
		.text-base{font-style:normal;font-weight:normal;font-size:60px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;white-space:pre;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;}
		.text-set-1{fill:rgb(255,215,0);stroke:rgb(167,167,167);filter:url(#shadow_1);}
	`;
	const curve_path = {
		cp_01:{d:'m 27.727122,120 c 139.530628,12.59579 267.901528,10.2742 396.938868,0'},
		cp_02:{d:'m 27.727122,190 c 139.530628,12.59579 267.901528,10.2742 396.938868,0'},
				
	};
	const text_setting = {
		t01:{x:"80",y:"300"},
		t02:{x:"25",y:"383"},
		tp01:{href:'#text_path_1'},
		tp02:{href:'#text_path_2'},
	}
	const path = {
		p01:{style:'stroke: none',d:'M 0.10199875,0.10199875 H 479.898 V 249.898 H 0.10199875 Z'},
		p02:{d:'M 7.7499988,38.885458 C 12.427541,31.925206 20.967647,28.190765 30.574193,28.277115 L 53.257598,0.10064492 C 43.597137,0.13074493 37.817133,2.9399259 33.309207,7.3136573 32.28295,8.3804677 31.305553,9.4916381 30.4245,10.690279 22.611285,20.426642 15.525818,29.664675 7.7499988,38.885458 Z'},
		p03:{d:'m 30.661147,28.292505 22.686828,-28.18626997 59.606425,0.036 -6.12592,7.49337997 c -3.76463,5.92241 -0.37201,7.60132 6.17325,7.36987 84.04019,6.88946 169.92002,6.45748 257.29273,0.0839 7.24632,0.39877 12.71346,-2.5457 17.09864,-7.52326 l 6.17422,-7.44865997 56.02267,-0.0174 L 426.92008,28.172515 C 294.8432,46.390195 162.73804,41.042065 30.661147,28.292505 Z'},
		p04:{d:'m 106.82802,7.635615 6.15934,-7.44535 -0.0233,14.91145 c -5.08259,0.37515 -10.81148,-0.8639 -6.13599,-7.4661 z'},
		p05:{d:'m 426.25287,28.172515 c 22.85818,1.27235 30.02077,16.23574 30.33595,42.329304 l 0.009,126.904951 22.72624,-28.156 -0.009,-126.904945 c -0.46723,-25.93136 -8.31364,-42.84737 -30.39232,-42.37541 z'},
		p06:{d:'m 449.46551,228.371 c 5.55711,-8.43707 7.12697,-17.22131 7.34902,-30.96423 l 22.72622,-28.156 c -0.77079,26.9332 -10.42454,39.01853 -30.07524,59.12023 z'},
		p07:{d:'m 112.95399,0.14223503 0.0473,14.86324997'},
		p08:{d:'M 470.06125,8.4142223 447.33504,36.570243'},
		p09:{d:'M 479.25624,37.133554 456.53002,65.289541'},
		p10:{d:'m 30.661178,28.292495 c 137.810272,13.16055 267.930902,17.61322 396.159202,0.0193 21.62278,1.34028 30.18372,14.39071 30.33596,42.3293 l 0.009,126.904945 c -0.19579,27.85033 -8.94141,39.60342 -29.50918,41.79145 C 296.03658,255.23605 162.89293,250.74755 30.620183,239.97896 10.088618,238.96643 -0.669727,225.58917 0.142519,197.63762 L 0.132233,70.689435 c 0.02254,-28.18929 10.095723,-42.46816 30.528914,-42.39693 z'},
		p11:{d:'m 32.569701,50.566439 c 129.266259,11.17574 259.969129,15.53058 394.860239,0 l 0.80023,165.443041 0.008,1.56637 c -133.96307,15.97242 -265.59156,11.15384 -396.741027,-0.06 z'},
	};
	await SE.svg('absolute','web3dSpecs',{...svg_args},null,null,svg_container);
	await SE.svgDefs(null,'#web3dSpecs');
	await SE.svgFilter(null,null,'defs');
	await SE.svgFeDropShadow(null,null,{...drop_shadow},'filter');
	await SE.svgStyle(null,svg_styles, 'defs');
	await SE.svgPath('base-style','text_path_1',{...curve_path.cp_01},'defs');
	await SE.svgPath('base-style','text_path_2',{...curve_path.cp_02},'defs');
	await SE.svgGroup(null,'mainGroup',null,'#web3dSpecs');
	await SE.svgGroup(null,'subGroup1',null,'#mainGroup');
	await SE.svgPath('base-style','path_01',{...path.p01},'#subGroup1');
	await SE.svgPath('base-style fill-2','path_02',{...path.p02},'#subGroup1');
	await SE.svgPath('base-style fill-2','path_03',{...path.p03},'#subGroup1');
	await SE.svgPath('base-style fill-2','path_04',{...path.p04},'#subGroup1');
	await SE.svgPath('base-style fill-2','path_05',{...path.p05},'#subGroup1');
	await SE.svgPath('base-style fill-2','path_06',{...path.p06},'#subGroup1');
	await SE.svgPath('base-style','path_07',{...path.p07},'#subGroup1');
	await SE.svgPath('base-style','path_08',{...path.p08},'#subGroup1');
	await SE.svgPath('base-style','path_09',{...path.p09},'#subGroup1');
	await SE.svgPath('base-style fill-1','path_10',{...path.p10},'#subGroup1');
	await SE.svgPath('base-style stroke-set-1','path_11',{...path.p11},'#subGroup1');
	await SE.svgGroup(null,'subGroup2',null,'#mainGroup');
	await SE.svgText('text-base text-set-1','text_01',{...text_setting.t01},null,null,'#subGroup2');
	await SE.svgText('text-base text-set-1','text_02',{...text_setting.t02},null,null,'#subGroup2');
	await SE.svgTextPath(null,null,{...text_setting.tp01},'WEB\\3/D',false,'#text_01');
	await SE.svgTextPath(null,null,{...text_setting.tp02},'SHOPPINGS',false,'#text_02');
	if(true === _log){
		//console.table();
		//console.log(': ', );
	}
};