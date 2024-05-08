  /*
*
*/

// json 목록에 있는 기본 데이터 넣기.
fetch("data/data.json")
	.then(result => result.json())
	.then(result => {
		for (all in result) {
			makeRow(result[all]);
		}
	})

// 추가
document.querySelector('#add').addEventListener('click', addRow)
function addRow() {
	let code = document.querySelector('#code').value;
	let book_name = document.querySelector('#book_name').value;
	let author_name = document.querySelector('#author_name').value;
	let press = document.querySelector('#press').value;
	let price = document.querySelector('#price').value;
	const mem = { code, book_name, author_name, press, price };
	makeRow(mem);
	document.querySelector('#code').value = "";
	document.querySelector('#book_name').value = "";
	document.querySelector('#author_name').value = "";
	document.querySelector('#press').value = "";
	document.querySelector('#price').value = "";

}
function makeRow(member = { code, book_name, author_name, press, price }) {
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	let chk = document.createElement('input');
	chk.setAttribute('type', 'checkBox');
	td.appendChild(chk);
	tr.appendChild(td);
	for (let members in member) {
		td = document.createElement('td');
		td.innerText = member[members];
		tr.appendChild(td);
	}
	let ts = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow)
	ts.appendChild(btn);
	tr.appendChild(ts);
	document.querySelector('#elist').appendChild(tr);
	return tr;
}

// 개별삭제
function deleteRow() {
	let tr = this.parentElement.parentElement;
	tr.remove();
}
// 선택삭제
document.querySelector('#del').addEventListener('click',function(){
	let tr = document.querySelectorAll('#elist tr');
	tr.forEach(chk =>{
		if(chk.children[0].children[0].checked){
			chk.remove();
		}
	})
})
// 모두선택
document.querySelector('#allchk').addEventListener('click',function(){
	let all = document.querySelectorAll('tbody input[type="checkBox"]');
	all.forEach(chk =>{
		if(chk.checked){
			chk.checked=false;
		}else{
			chk.checked=true;
		}
	})
})
// 