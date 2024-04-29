/**
 * member.js
 */
// 추가 클릭이벤트 등록.
// 사용자의 입력값 3개 => tr > td *3 => tbody 하위요소 추가
document.querySelector('#addMember').addEventListener('click', addmMemberFnc)
function addmMemberFnc() {
	let memberNo = document.querySelector('#memberNo').value;
	let memberName = document.querySelector('#memberName').value;
	let memberPoint = document.querySelector('#memberPoint').value;
	const mem = { memberNo, memberName, memberPoint }
	let tr = makeRow(mem);
	document.querySelector('table#tlist tbody').appendChild(tr);
}
// member 정보를 활용 tr반환
function makeRow(member = { memberNo, memberName, memberPoint }) {
	//tr 생성
	let tr = document.createElement('tr');
	for (let prop in member) {
		let td = document.createElement('td');
		td.innerText = member[prop]; //mem.memberNo
		tr.appendChild(td);
	}
	// <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button')
	btn.innerText = '삭제';

	td.appendChild(btn);
	tr.appendChild(td);
	btn.addEventListener('click', deleteRow);

	//체크박스

	td = document.createElement('td');
	let chk = document.createElement('input');
	chk.setAttribute('type', 'checkbox');
	chk.addEventListener('change', changeRow);
	td.appendChild(chk);
	tr.appendChild(td);
	return tr;
}
function changeRow(e) {
	// this => <input type = "checkbox" checked>
	//console.log(this.checked); //checkbox일 경우 true false 반환.
	document.querySelectorAll('tbody input[type="checkbox"]').forEach(function(item) {
		item.checked = true;
	})
}

function deleteRow(evnt) {
	evnt.target.parentElement.parentElement.remove();
	//td.parentElement.remove();
}
// members 배열의 갯수만큼 tr생성.
members.forEach(function(item) {
	let tr = makeRow(item);
	document.querySelector('table#tlist tbody').appendChild(tr);
});


