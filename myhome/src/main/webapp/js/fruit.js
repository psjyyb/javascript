/**
 * fruit.js
 */
console.log(document.querySelector('button'));
document.querySelector('#addBtn').addEventListener('click',function(){
		  // 요소생성(createEmlement)
		  // wktlrdyth(appendChild)
		  
		  let txt = document.querySelector('input').value;
		  let price = document.querySelector('input:nth-of-type(2)').value; // :nth-of-type(n) n번째 인풋태그를 찾겠다.
		  let li = document.createElement('li');
		  li.innerText = txt + '('+ price +')';
		  // 삭제버튼.
		  let btn = document.createElement('button');
		  btn.innerText = '삭제';
		  li.appendChild(btn);
		  btn.addEventListener('click',function(){
			console.log(this);
			this.parentElement.remove(); 
		  })
		  
		  let ul = document.querySelector('ul');
		  ul.appendChild(li);
		  
	});
	