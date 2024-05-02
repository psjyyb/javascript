/*
*  ajax1.js
*/

const xhtp = new XMLHttpRequest();
xhtp.open('get','../empList.json'); // 호출할 페이지 지정.
xhtp.send(); // 호출시작.
xhtp.onload = function(){
	let jsonObj = JSON.parse(xhtp.responseText);
	console.log(jsonObj);
}
