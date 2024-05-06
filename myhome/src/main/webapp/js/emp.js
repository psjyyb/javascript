/*
* emp.js
*/

document.addEventListener("DOMContentLoaded", initForm);

// 화면로딩 후 처음 실행할 함수.
function initForm() {
	// Ajax호출.
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../empJson.json');
	xhtp.send();
	xhtp.onload = function() {
		let data = JSON.parse(xhtp.responseText);
		data.forEach(emp => {
			let tr = makeRow(emp);
			document.querySelector('#elist').appendChild(tr);
		})
	}
		// 등록버튼 이벤트
	document.querySelector('#addBtn').addEventListener('click',addRow);
} // end of initForm.

function addRow(){
	console.log(123213);
	// db insert & 화면출력.
	const addHtp = new XMLHttpRequest();
	// 사원이름(ename),연락처(phone),급여(salary),입사일자(hire),이메일(email) 
	let ename = document.querySelector('#ename').value;
	let ephone= document.querySelector('#ephone').value;
	let email = document.querySelector('#email').value;
	let esalary = document.querySelector('#esalary').value;
	let ehire = document.querySelector('#edate').value;
	
	let param = 'job=add&name='+ename+'&phone='+ephone
	+'&salary='+esalary+'&hire='+ehire+'&email='+email;
	addHtp.open('post','../empsave.json');
	addHtp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');// x-www-form-urlencoded <- 키, 벨류 옵션으로 값을 넘기겠다.
	addHtp.send(param);
	addHtp.onload = function(){
		let result = JSON.parse(addHtp.responseText);
		console.log(result);
		if(result.reCode=='OK'){
			let tr = makeRow(result.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	}
}// end of addRow.

function makeRow(emp = {}) {
	let props = ['empNo', 'empName', 'empPhone', 'email', 'salary'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-no',emp.empNo);
	tr.addEventListener('dblclick',modifyRow);
	props.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	});
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
	
}// end of makeRow.

// 화면수정 함수
function modifyRow(){
	let originMail = this.children[3].innerText;
	let originSalary = this.children[4].innerText;
	let oldTr = this;
	let newTr = this.cloneNode(true); // 복제.
	newTr.querySelector('td:nth-of-type(4)').innerHTML
	 = '<input value ="'+ originMail+'">';
	 newTr.querySelector('td:nth-of-type(5)').innerHTML
	 = '<input value = "'+originSalary+'">';
	 newTr.querySelector('button').innerText = '수정';
	 newTr.querySelector('button').addEventListener('click',updateRow)
	console.log(newTr);
	oldTr.parentElement.replaceChild(newTr,oldTr);
} // end of modifyRow.
//실제 값을 바꿔주는 함수
function updateRow(){
	let oldTr = this.parentElement.parentElement;
	let empNo = this.parentElement.parentElement.dataset.no; // date-no => dataset.no
	let email = this.parentElement.parentElement.children[3].children[0].value;
	let salary = this.parentElement.parentElement.children[4].children[0].value;
	const editHtp = new XMLHttpRequest();
	editHtp.open('get','../empsave.json?job=edit&empNo='+empNo+'&salary='+salary+'&email='+email);
	editHtp.send();
	editHtp.onload =function(){
		let result = JSON.parse(editHtp.responseText);
		console.log(JSON.parse(editHtp.responseText));
		if(result.reCode=='OK'){
			let newTr =makeRow(result.retVal);
			oldTr.parentElement.replaceChild(newTr,oldTr);
		}
		
	}
} //end of updateRow
function deleteRow(){
	const delNo = this.parentElement.parentElement.children[0].innerText;
	let tr = this.parentElement.parentElement;
	console.log(delNo)
	// 서블릿실행(삭제) -> OK 반환 -> 화면처리.
	const delHtp = new XMLHttpRequest();
	delHtp.open('get','../empsave.json?job=delete&empNo='+delNo);
	delHtp.send();
	delHtp.onload = function(){
		let result = JSON.parse(delHtp.responseText); // retCode:ok
		if(result.retCode=='OK'){
			tr.remove();
		}else if (result.retCode=='NG'){
			alert('처리중 에러발생')
		}else{
			aletr('처리코드 확인하세요.')
		}
	}

	
}// end of deleteRow.