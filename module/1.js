console.log('1模块被加载了');
export const a = 12;

const b = 1;
const c = 2;
const d = 3;

//export {b,c,d};
export {
	b as banana,
	c as cup,
	d as doctor
}

export default 12;
export const ee=111;
export const ss=2222;
