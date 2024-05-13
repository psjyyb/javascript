/**
 * board.js
 */
// 수정버튼
document.querySelector('#modBtn').addEventListener('click', function() {
	document.forms.myFrm.action = "modBoardForm.do"; // 수정화면을 열어주기위한 컨트롤
	document.forms.myFrm.submit(); // submit 이벤트 호출
})
document.querySelector('.btn-danger').addEventListener('click', function() {
	document.forms.myFrm.action = "removeBoardForm.do"; // 삭제화면을 열어주기위한 컨트롤	
	document.forms.myFrm.submit(); // submit 이벤트 호출
})

// 댓글 목록 출력.
fetch('replyList.do?bno=' + bno)
	.then(resolve => resolve.json())// json ->객체.
	.then(result => {
		result.forEach(reply => {
			let tmpl = document.querySelector('div.reply li:nth-of-type(3)').cloneNode(true);
			tmpl.style.display = 'block';
			tmpl.setAttribute('data-rno', reply.replyNo);
			tmpl.querySelector('span:nth-of-type(1)').innerText = reply.replyNo;
			tmpl.querySelector('span:nth-of-type(2)').innerText = reply.reply;
			tmpl.querySelector('span:nth-of-type(3)').innerText = reply.replyer;
			document.querySelector('div.reply ul').appendChild(tmpl);

		})

	})
	.catch(err => {
		console.log(err);
	})

// 삭제버튼 이벤트.
function deleteRow(e) {
	//   console.log(e);
	const rno = e.target.parentElement.parentElement.dataset.rno;
	//   console.log(rno);
	console.log(writer);// 로그인한 유저 아이디
	// 로그인한 유저 아이디와 댓글 유저아이디 비교
	
	// fetch 삭제기능 구현
	fetch('removeReply.do?rno=' + rno)
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('삭제완료');
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert('삭제 실패');
			} else {
				alert('알수없는 반환값');
			}

		})
		.catch(err => console.log(err));
}

document.getElementById('addReply').addEventListener('click', function(e) {

	let reply = document.getElementById('reply').value;
	if (reply == "") {
		alert("댓글을 입력해주세요");
	} else if (writer == "") {
		alert("로그인후 이용해주세요.")
	} else {
		fetch('addReply.do?bno=' + bno + '&replyer=' + writer + '&reply=' + reply)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					location.reload();
					alert('등록완료');
				} else if (result.retCode == 'NG') {
					alert('등록실패');
				} else {
					alert('알수없는 반환값');
				}

			})
			.catch(err => console.log(err))

	}
})

