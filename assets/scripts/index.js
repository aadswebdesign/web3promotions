/** scripts/index.js */
import * as FT from "./factory/functions.js";
import * as AT from "./factory/actions.js";
import {navigationView} from "./modules/views/navigation_view.js"; 
import {mainView} from './modules/views/main_view.js'; 
(async function(){
	//await console.log('index.js');
	await navigationView();
	await mainView();
	await AT.pagingSetup();
	await AT.generals();
	await FT.userAgentSniffer();
	await FT.userAgentString();
})();