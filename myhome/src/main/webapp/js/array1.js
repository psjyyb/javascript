/*
* js/array1.js
*/
empList.forEach((item, idx) => {
	if (item.first_name.indexOf('e') >= 0) {
		//console.log(item);
	}
});

let newAry = empList.filter((item, idx, ary) => {

	return (idx+1) ==  ary.length;
});
// A -> A' 
newAry = empList.map((item,idx,ary)=>{
	const obj = {
		no: item.id,
		name : item.first_name+"-"+item.last_name,
		email : item.email
	}
	return obj;
});

console.log(newAry);

console.clear();
let result = empList.reduce((acc,cur)=>{
	if(cur.gender=='Male'){
		acc.push(cur);
	}
	return acc;
},[]);

console.log(result)

const array1 = [1,2,3,4,8,4,36,4];
const initalValue = 0;
const simWithInitial = array1.reduce(function (acc,cur){
	return acc < cur ? acc : cur;
});
console.log(simWithInitial);

//String.prototype.indexOf('') => 찾는 값의 인덱스를 반환. 문자열
//Array.prototype.indexOf('') => 찾는 값의 인덱스를 반환. 배열 
console.log("abcde".indexOf('g'));
console.log([1,2,3,4,5].indexOf(3));

let genderAry = []; // gender를 종류별로 한가지만 담고 싶어.

empList.forEach((emp)=>{
	
	if(genderAry.indexOf(emp.gender)<0){
		genderAry.push(emp.gender);
	}
});
console.log(genderAry);