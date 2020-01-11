
export function isArr (v) {
	return Object.prototype.toString.call(v) === '[object Array]'
}
	
export function isFun (v) {
	return Object.prototype.toString.call(v) === '[object Function]'
}
