/*
* add.js
*/
// 삭제버튼
let li = document.querySelectorAll('li');
li.forEach(function(as) {
	let btn = document.createElement('span');
	let text = document.createTextNode("\u00D7");
	btn.className = "close";
	btn.appendChild(text);
	as.appendChild(btn);
	btn.addEventListener('click', function() {
		as.remove();
	})
})
// 추가버튼
function newElement() {
	let txt = document.querySelector('input').value;
	if (txt != '') {
		let li = document.createElement('li');
		li.innerText = txt;
		let ul = document.querySelector('#myUL');
		let span = document.createElement('span');
		let text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		span.addEventListener('click', function() {
			li.remove();
		})
		li.appendChild(span);
		ul.appendChild(li);
	} else {
		alert('입력하세요');
	}
	document.querySelector('input').value = ''; //  add 후 input 창지워주기
}
document.querySelector('#myUL').addEventListener('click', function(el) {
	let target = el.target;
	if (target.className == 'checked') {
		target.className = '';
	} else {
		target.className = 'checked';
	}
})
