/**
 * board.js
 */
// 수정버튼
document.querySelector('#modBtn').addEventListener('click',function(){
	document.forms.myFrm.action = "modBoardForm.do"; // 수정화면을 열어주기위한 컨트롤
	document.forms.myFrm.submit(); // submit 이벤트 호출
})
document.querySelector('.btn-danger').addEventListener('click',function(){
	document.forms.myFrm.action = "removeBoardForm.do"; // 삭제화면을 열어주기위한 컨트롤	
	document.forms.myFrm.submit(); // submit 이벤트 호출
})