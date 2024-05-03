/*
* empFetchService.js Ajax 기능을 fetch 함수 활용
* empSvc 객체에 기능을 구현. 메소드를 호출.
*/

document.addEventListener("DOMContentLoaded", initForm);

function initForm() {
	// Ajax 호출.목록출력
	svc.empList(result => {
		result.forEach(emp => {
			let tr = makeRow(emp);
			document.querySelector('#elist').appendChild(tr);
		}) // end of forEach.
	}, // successCall 
		err => console.log(err)) //errorCall

	// 등록 이벤트.
	document.querySelector('#addBtn').addEventListener('click', addRow);
}// end of initform.

function makeRow(emp = {}) {
	let props = ['empNo', 'empName', 'empPhone', 'email', 'salary'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-no', emp.empNo);
	tr.addEventListener('dblclick', modifyRow);
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
} // end of makeRow

// 삭제이벤트.
function deleteRow() {
	let eno = this.parentElement.parentElement.dataset.no;
	let tr = this.parentElement.parentElement;
	svc.deleteRow(eno,
		data => {
			if (data.retCode == 'OK') {
				tr.remove();
			}
		},
		err => console.log(err) // errorCall
	);
}// end of deletRow

// 등록이벤트.
function addRow() {
	// db insert & 화면출력.
	// 사원이름(ename),연락처(phone),급여(salary),입사일자(hire),이메일(email) 
	let paramObj = {
		job: 'add',
		name: document.querySelector('#ename').value,
		phone: document.querySelector('#ephone').value,
		salary: document.querySelector('#esalary').value,
		hire: document.querySelector('#edate').value,
		mail: document.querySelector('#email').value
	} // 등록 param.
	svc.addEmp(paramObj,
		data => {
			if (data.reCode == 'OK') {
				let tr = makeRow(data.retVal);
				document.querySelector('#elist').appendChild(tr);
			}
		},
		err => console.log(err) // errorCall
	);

}// end of addRow.

// 화면수정 함수.
function modifyRow() {
	let originMail = this.children[3].innerText;
	let originSalary = this.children[4].innerText;
	let oldTr = this;
	let newTr = this.cloneNode(true); // 복제.
	newTr.querySelector('td:nth-of-type(4)').innerHTML
		= '<input value ="' + originMail + '">';
	newTr.querySelector('td:nth-of-type(5)').innerHTML
		= '<input value = "' + originSalary + '">';
	newTr.querySelector('button').innerText = '수정';
	newTr.querySelector('button').addEventListener('click', updateRow)
	console.log(newTr);
	oldTr.parentElement.replaceChild(newTr, oldTr);
} // end of modifyRow.

//실제 값을 바꿔주는 함수
function updateRow() {
	let oldTr = this.parentElement.parentElement;

	let empNo = this.parentElement.parentElement.dataset.no; // date-no => dataset.no
	let email = this.parentElement.parentElement.children[3].children[0].value;
	let salary = this.parentElement.parentElement.children[4].children[0].value;

	let paramObj = {
		empNo,
		salary,
		email
	}
	svc.editEmp(paramObj,
		data => {
			if (data.reCode == 'OK') {
				let newTr = makeRow(data.retVal);
				oldTr.parentElement.replaceChild(newTr, oldTr);
			}
		},// successCall
		err => console.log(err) //erorrCall
	)
} //end of updateRow
