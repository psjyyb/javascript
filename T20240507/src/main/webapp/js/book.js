/**
 * book.js
 */
// 추가버튼
document.querySelector('#add').addEventListener('click', addBook)
function addBook() {
	let code = document.querySelector('#code').value;
	let book_name = document.querySelector('#name').value;
	let author_name = document.querySelector('#write').value;
	let press = document.querySelector('#com').value;
	let price = document.querySelector('#price').value;
	const mem = { code, book_name, author_name, press, price };
	let tr = makeRow(mem)
	document.querySelector('#list table tbody').appendChild(tr);
	document.querySelector('#code').value="";
	document.querySelector('#name').value="";
	document.querySelector('#write').value="";
	document.querySelector('#com').value="";
	document.querySelector('#price').value="";
}
// tr,td생성후 값넣기,삭제버튼,체크박스
function makeRow(member = { code, book_name, author_name, press, price }) {
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	let ck = document.createElement('input');
	ck.setAttribute('type', 'checkbox');
	td.appendChild(ck);
	tr.appendChild(td);
	
	for (let prop in member) {
	
		td = document.createElement('td');
		td.innerText = member[prop];
		tr.appendChild(td);
		
	}
	td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;
}
// 삭제버튼
function deleteRow() {
	let tr = this.parentElement.parentElement;
	tr.remove();
}
// 전체선택
let all = document.querySelector('thead input[type="checkbox"]');
all.addEventListener('change', function() {
	//event핸들러 => this
	// thead => tbody 적용.
	let inp = this;
	document.querySelectorAll('tbody input[type="checkbox"]')
		.forEach(function(item) {
			item.checked = inp.checked;
		})
})

//선택삭제
document.querySelector('#del').addEventListener('click', function() {
	let tr = document.querySelectorAll('#elist tr');
	tr.forEach(function(all) {
		if (all.children[0].children[0].checked) {
			all.remove();
		}
	})
})

// 기본정보 
fetch("data/data.json")
	.then(result => result.json())
	.then(result => {
		result.forEach(function(list) {
			let tr = makeRow(list);
			document.querySelector('#list table tbody').appendChild(tr);
		})
	})