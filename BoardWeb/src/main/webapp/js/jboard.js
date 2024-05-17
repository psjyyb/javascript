/**
 * jboard.js
 */
// 수정버튼.
$('#modBtn').on('click', function() {
	document.forms.myFrm.action = "modBoardForm.do"; //수정화면 호출.
	document.forms.myFrm.submit(); // submit이벤트 호출.
})

// 삭제버튼.
$('.btn-danger').on('click', function() {
	document.forms.myFrm.action = "removeBoardForm.do"; //삭제화면 호출.
	document.forms.myFrm.submit(); // submit이벤트 호출.
})

let page = 1;
showList()
function showList() {
	// 새로운 목록을 출력할 경우에 기존 목록 지우기.
	makePageInfo()
	$('div.content ul li:gt(2)').remove();
	svc.replyList({ bno: bno, page: page },
		result => {
			result.forEach(reply => {
				const row = makeRow(reply);
				row.appendTo('div.reply ul');
			})
		},
		err => { console.log(err) })
}

function makeRow(reply = {}) {
	let tmpl = $('div.reply li:eq(2)').clone();
	tmpl.on('dblclick', function(e) {
		setTimeout(function() {
			$('#myModal').css('display', 'block');
			let replyNo = $(e.target).parent().children().eq(0).text();
			$('.modal-content p:eq(0)').text('댓글번호 : ' + replyNo);
			$('.modal-content p:eq(1)').find('input').val(reply.reply);
		}, 1500);
	})
	tmpl.css('display', 'block');
	tmpl.attr('data-rno', reply.replyNo);
	tmpl.find('span:eq(0)').text(reply.replyNo);
	tmpl.find('span:eq(1)').text(reply.reply);
	tmpl.find('span:eq(2)').text(reply.replyer);
	return tmpl;
}// end of makeRow()

function deleteRow(e) {
	const rno = $(e.target).parent().parent().data('rno');
	let id = e.target.parentElement.parentElement.children[2].innerHTML; //댓글작성자id
	if (writer != id) {
		alert('삭제할 권한이 없습니다');
		return;
	}
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				alert('삭제완료');
				showList(); //댓글삭제하면 계속 5개 되도록			
			} else if (result.retCode == 'NG') {
				alert('삭제를 완료할 수 없습니다');
			} else {
				alert('알 수 없는 반환값');
			}
		}, //두번째 param
		err => console.log(err) //세번째 param
	)
}//end of deleteRow(e)

$('#addReply').on('click', function() {
	let reply = $('#reply').val();
	if (writer == '') { //댓글창에 로그인하지 않고 입력할때 뜨는 알림창
		alert("로그인 후에 입력하세요");
		return;
	} else if (reply == '') { //빈 댓글을 입력할때 뜨는 알림창
		alert("댓글을 입력하세요");
		return;
	}

	svc.addReply({ bno: bno, writer: writer, reply: reply },
		result => {
			if (result.retCode == 'OK') {
				//location.reload(); /새로고침..?/reload 대신하기위해 makeRow를 생성
				//const row = makeRow(result.retVal);
				//document.querySelector('div.reply ul').appendChild(row);
				showList();
				//댓글등록 후에 reply내용 초기화하기
				$('#reply').val("");
			}
		}, //두번째 param
		err => console.log(err)); //세번째 param

});

// 페이징 생성.
let pagination = $('div.pagination');

function makePageInfo() {
	svc.getTotalCount(bno// param1
		, createPageList // param2
		, err => console.log(err))
}

function createPageList(result) {

	// 페이지 속성 지정.
	let totalCnt = result.totalCount;// 127;
	let startPage, endPage, realEnd;
	let prev, next;

	realEnd = Math.ceil(totalCnt / 5);
	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	prev = startPage > 1;
	next = endPage < realEnd;

	// a 태그 생성.
	pagination.html('');
	// 이전페이지 여부.
	if (prev) {
		let aTag = $('<a>&laquo;</a>')//
			.attr('href', '#')//
			.attr('data-page', startPage - 1);
		aTag.on('click', function(e) {
			e.preventDefault(); // a 태그는 페이지이동.
			page = e.target.dataset.page; // 
			showList();
		})
		pagination.append(aTag);
	}
	for (let pg = startPage; pg <= endPage; pg++) {
		let aTag = $('<a />').html(pg) //
			.attr('data-page', pg)//
			.attr('href', pg);
		if (pg == page) {
			//aTag.attr('class', 'active');
			aTag.addClass('active');
		}
		aTag.on('click', function(e) {
			e.preventDefault(); // a 태그는 페이지이동.
			page = $(e.target).data('page'); // 
			showList();
		})
		pagination.append(aTag);
	}
	// 이후페이지 여부.
	if (next) {
		let aTag = $('<a>&raquo;</a>')//
			.attr('href', '#')//
			.attr('data-page', endPage + 1);
		aTag.on('click', function(e) {
			e.preventDefault(); // a 태그는 페이지이동.
			page = e.target.dataset.page; // 
			showList();
		})
		pagination.append(aTag);
	}

} // end of createPageList

// 수정기능 추가
$('.modal-content button').on('click', function() {
	let reply = $('input[name=modal_reply]').val();
	let replyNo = $('.modal span').dataset;
	let rno = $("p").eq(0).text(replyNo).text();
	console.log(rno.replace(/[^0-9]/g, ''));
	console.log('수정댓글' + reply);
	svc.editReply({ rno: rno.replace(/[^0-9]/g, ''), reply: reply },
		result => {
			console.log(result)
			if (result) {
				alert("수정완료");
				$('#myModal').css('display', 'none')
			}
		}, //두번째 param
		err => console.log(err) //세번째 param
	)
	showList();

})
