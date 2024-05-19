window.onload = function() {
	// 이안에 적어주기

	// 상품삭제
	let delBtn = document.getElementById('delBtn');
	delBtn.addEventListener('click', function() {

		console.log(pno);
		fetch('deleteProduct.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(resolve => {
				console.log(resolve);
				if (resolve.ok) {
					alert("삭제성공");
					window.location.href = "shopmain.do";
				} else {
					window.location.href = "deleteProduct.do"
				}
			})
			.catch(err => console.log(err)) //세번째 param
	})
	
	// 상품수정
	let modBtn = document.getElementById('modBtn');
	modBtn.addEventListener('click',function(){
		fetch()
	})
}