/*
* objedct.js(객체,함수)
* 객체(속성,메소드)
*/
const obj = {
	name: "홍길동",
	age: 20,
	showInfo: function() {
		return `name : ${this.name},  age : ${this.age}`
	},
	empList: function() {
		// Ajax
		fetch('../empList.json')
			.then(function(result) {
				return result.json(); // json 문자열 -> 객체 변환.
			})
			.then(function(result) {
				console.log('dsdsd'+result); // DOM 활용.
				result.forEach(function(member) {
					let tr = document.createElement('tr');
					for (let prop in member) {
						let td = document.createElement('td');
						td.innerText = member[prop];
						tr.appendChild(td);
					}
					document.querySelector('tbody').appendChild(tr);
				});
			})
	}
} // new Object(); 객체 생성
obj.name = "Hongkildong";
console.log(`이름 : ${obj.name},  나이 : ${obj.age}`);
console.log(obj.showInfo());

console.log(window);
// 속성확인
for (let prop in obj) {
	console.log(`속성 : ${prop}, 값 : ${obj[prop]}`);
}
//window.alert('확인!!');
obj.empList();
