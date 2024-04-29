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
	tr.addEventListener('click', function(e) {

		document.querySelector('#memberNo').value =
			tr.children[0].innerHTML;
		document.querySelector('#memberName').value =
			tr.children[1].innerHTML;
		document.querySelector('#memberPoint').value =
			tr.children[2].innerHTML;
	})
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

	console.log(this.checked)
}

function deleteRow(evnt) {
	evnt.stopPropagation(); //상하위 요소이벤트 차단
	evnt.target.parentElement.parentElement.remove();
	//td.parentElement.remove();
}
// thead input[type="checkbox"]
document.querySelector('thead input[type="checkbox"]')
	.addEventListener('change', function() {
		// event핸들러 => this
		// thead => tbody 적용.
		let inp = this;
		document.querySelectorAll('tbody input[type="checkbox"]')
			.forEach(function(item) {
				console.log(item);
				item.checked = inp.checked;
			})
	})
// members 배열의 갯수만큼 tr생성.
members.forEach(function(item) {
	let tr = makeRow(item);
	document.querySelector('table#tlist tbody').appendChild(tr);
});



