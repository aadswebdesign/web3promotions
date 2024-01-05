/**
 * @file: svgElements.js
 * @author: Aad Pouw 
 * @description: 
 * @note: 
 */
import * as SH from './svgHelper.js';
//_elem, _class, _id, _atts, _content, _tpl,_parent, _replace, _query = true, log = false){

export const svg = async ( _class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('svg', _class, _id, _atts, _content, _tpl,_parent, _replace, false, log);
};
export const svgAnchor = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('a',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
};
export const svgCircle = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('circle',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
};
export const svgDefs = async ( _id,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('defs',null, _id, null, null, null,_parent, _replace, true, log);
};
export const svgEllipse = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('ellipse',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
};
export const svgFeDropShadow = async (_class, _id, _atts,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('feDropShadow',_class, _id, _atts, null, null,_parent, _replace, true, log);
};
export const svgFilter = async (_class, _id, _parent, _replace, log = false) => {
	return await SH.createSvgHelper('filter',_class, _id, null, null, null,_parent, _replace, true, log);
};
export const svgGroup = async ( _class, _id, _atts,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('g', _class, _id, _atts, null, null,_parent, _replace, true, log);
 };
export const svgImage = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('image',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgLine = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('line',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgLinearGradient = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('linearGradient',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgMarker = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('marker',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgPath = async (_class, _id, _atts,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('path',_class, _id, _atts, null,null,_parent, _replace, true, log);
 };
export const svgPattern = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('pattern',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgPolygon = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('polygon',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgPolyline = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('polyline',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgRect = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('rect',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgStop = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('stop',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgStyle = async ( _id, _content,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('style',null, _id, null, _content, null,_parent, _replace, true, log);
 };
export const svgSymbol = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('symbol',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgText = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('text',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgTextPath = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('textPath',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgTitle = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('title',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };
export const svgUse = async (_class, _id, _atts, _content, _tpl,_parent, _replace, log = false) => {
	return await SH.createSvgHelper('use',_class, _id, _atts, _content, _tpl,_parent, _replace, true, log);
 };


/**@description preserveAspectRatio ,see mdn for more
  aligns	
  * none, Do not force uniform scaling.
  * xMinYMin,
		Align the <min-x> of the element's viewBox with the smallest X value of the viewport. 
		Align the <min-y> of the element's viewBox with the smallest Y value of the viewport.
  *	xMidYMin,
		Align the midpoint X value of the element's viewBox with the midpoint X value of the viewport. 
		Align the <min-y> of the element's viewBox with the smallest Y value of the viewport.
  *	xMaxYMin,
		Align the <min-x>+<width> of the element's viewBox with the maximum X value of the viewport. 
		Align the <min-y> of the element's viewBox with the smallest Y value of the viewport.
  *	xMinYMid,
		Align the <min-x> of the element's viewBox with the smallest X value of the viewport. 
		Align the midpoint Y value of the element's viewBox with the midpoint Y value of the viewport.
  *	xMidYMid,
		Align the midpoint X value of the element's viewBox with the midpoint X value of the viewport. 
		Align the midpoint Y value of the element's viewBox with the midpoint Y value of the viewport.
  *	xMaxYMid,
		Align the <min-x>+<width> of the element's viewBox with the maximum X value of the viewport. 
		Align the midpoint Y value of the element's viewBox with the midpoint Y value of the viewport.
  *	xMinYMax,
		Align the <min-x> of the element's viewBox with the smallest X value of the viewport. 
		Align the <min-y>+<height> of the element's viewBox with the maximum Y value of the viewport.
  *	xMidYMax,
		Align the midpoint X value of the element's viewBox with the midpoint X value of the viewport. 
		Align the <min-y>+<height> of the element's viewBox with the maximum Y value of the viewport.
  *	xMaxYMax,
		Align the <min-x>+<width> of the element's viewBox with the maximum X value of the viewport. 
		Align the <min-y>+<height> of the element's viewBox with the maximum Y value of the viewport.
  meet or slice
  * meet,
		aspect ratio is preserved
		the entire viewBox is visible within the viewport
		the viewBox is scaled up as much as possible, while still meeting the other criteria
  * slice,
		aspect ratio is preserved
		the entire viewport is covered by the viewBox
		the viewBox is scaled down as much as possible, while still meeting the other criteria
  */	 
export const setSvgAspRatio = async (_ratio, meet = false)=>{
	let meetOrSlice;
	if(true === meet){
		meetOrSlice = ' meet';
	}else{
		meetOrSlice = ' slice';
	}
	return {preserveAspectRatio:_ratio+meetOrSlice};
};







 

