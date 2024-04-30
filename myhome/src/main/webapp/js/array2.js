/*
* array2.js
*/
let genderAry = []; // gender를 종류별로 한가지만 담고 싶어.
empList.forEach(emp => {

	if (genderAry.indexOf(emp.gender) < 0) {
		genderAry.push(emp.gender);
	}
});
genderAry.forEach(gender => {
	let opt = document.createElement('option');
	opt.innerHTML = gender;
	document.querySelector('#genderList').appendChild(opt)
})
function makeList(ary = []) {
	let obj = { id: 1, fitst_name: '', last_name: '', eamil: '', gender: '', salary: '' };
	let props = ['id', 'first_name', 'email', 'salary'];
	
	ary.forEach(emp => {
		let tr = document.createElement('tr');
		props.forEach(prop => {
			let td = document.createElement('td');
			td.innerHTML = emp[prop];
			tr.appendChild(td);
		})

		document.querySelector('#show tbody').appendChild(tr);
	})
}
function genderList(ary=[]){
	if(document.querySelector('#genderList')==empList.gender){
		
	let arr = makeList();
	}
	return arr;
}
makeList(empList);
// 체인지 이벤트 발생 
document.querySelector('#show').addEventListener('change',genderList)
