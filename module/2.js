//依赖模块
import {a,b} from './3.js';

const sum = () => {
	console.log(a+b);
	return a+b;
}
const show = () => {
	console.log('show函数被执行了');
	return 1;
}

class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
	showName() {
		return `我的名字是${this.name};`
	}
}
export {
	a,
	b,
	show,
	sum
}
export default {
	Person
}
