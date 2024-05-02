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
function makeHome() {
	let obj = ['번호', '이름', '성', '이메일', '성별', 'ip_address']
	let tr = document.createElement('tr');
	for (let i = 0; i < obj.length; i++) {
		let th = document.createElement('th');
		th.innerText = obj[i];
		tr.appendChild(th);
	}
	document.querySelector('#show thead').appendChild(tr);

}
function makeList(ary = []) {
	let obj = { id: 1, fitst_name: '', last_name: '', eamil: '', gender: '', ip_address: '' };
	let props = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];

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
function viewAll() {
	let sd = document.querySelectorAll('#show tbody tr');
	sd.forEach(function(as) {
		as.remove();
	})
	makeList(empList);
}
// 체인지 이벤트 발생 
document.querySelector('#genderList').addEventListener('change', genderLists)
function genderLists() {
	viewAll();
	let sd = document.querySelectorAll('#show tbody tr');
	let dd = document.querySelector('#genderList').value
	if (dd == 'all') {
		viewAll();
		return;
	}
	sd.forEach(function(tr) {
		let td = tr.children[4].innerHTML;
		if (dd != td) {
			tr.remove();
		}
	}) 
}
makeList(empList);
makeHome();