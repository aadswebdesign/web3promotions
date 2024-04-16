/** modules/views/navigation_view.js */
import * as HE from './../../htmlManager/htmlElements.js';
//main-menu realtive
export async function navigationView(){
	await HE.div('block menu-item home active', 'menu_item_0',{title: 'Home'},null,false, 'nav.main-menu');
	await HE.div('block menu-item globe relative', 'menu_item_1',{title:'World English Presentation'},null,false, 'nav.main-menu');
	await HE.div('block menu-item flag-nl relative', 'menu_item_2',{title:'Dutch/NL Presentatie'},null, false, 'nav.main-menu');
	//await HE.div('block menu-item flag-th relative', 'menu_item_3',{title:'การนำเสนอภาษาไทย'},null,false, 'nav.main-menu');
}