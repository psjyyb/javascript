/**
 * jcart.js
 */

// 숫자 3자리 콤마찍기
Number.prototype.numberFormat = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

let basket = {
	cartCount: 0, // 전체수량.
	cartTotal: 0, // 전체금액.

	list: function() {
		// 목록.
		svc.cartList(
			result => {
				//console.log(result);
				$(result).each((idx, cart) => {
					basket.cartCount += cart.qty;
					basket.cartTotal += (cart.qty * cart.price);
					const rowDiv = $('div[data-id="0"]').clone();
					$(rowDiv).css('display', 'block');
					$(rowDiv).attr('data-id', cart.no);
					$(rowDiv).find('div.img>img').attr('src', 'images/'+ cart.productNm + '.jpg');
					$(rowDiv).find('div.pname>span').text(cart.productNm);
					$(rowDiv).find('div.basketprice').children().eq(1).text(cart.price.numberFormat() + "원"); //
					console.log($(rowDiv).find('div.basketprice').children().eq(1));
					console.log(cart.price.numberFormat());
					//$(rowDiv).find('div.basketprice input').val(cart.price);
					$(rowDiv).find('div.basketprice input').attr('id', 'p_price' + cart.no);
					console.log($(rowDiv).find('div.basketprice').children().eq(1).text());
					
					$(rowDiv).find('div.updown input').val(cart.qty);
					$(rowDiv).find('div.updown input').attr('id', 'p_num' + cart.no);
					$(rowDiv).find('div.updown input').attr('name', 'p_num' + cart.no);
					
					// event
					$(rowDiv).find('div.updown input').on('keyup', () => {
						basket.changePNum(cart.no);
					})
					$(rowDiv).find('div.updown span').on('click', () => {
						basket.changePNum(cart.no);
					})
					$(rowDiv).find('div.updown span:nth-of-type(2)').on('click', ()=>{
						basket.changePNum(cart.no);
					})
					
					// event
					$(rowDiv).find('div.updown input').on('keyup', () => basket.changePNum(cart.no));
					$(rowDiv).find('div.updown span').on('click', () => basket.changePNum(cart.no));
					$(rowDiv).find('div.updown span:nth-of-type(2)').on('click', () => basket.changePNum(cart.no));
					// 개별합계
					$(rowDiv).find('div.sum').text((cart.qty * cart.price).numberFormat() + "원");
					$(rowDiv).find('div.sum').attr('id', 'p_sum' + cart.no);
					$('#basket').append(rowDiv);
				});
				basket.reCalc();
			},
			err => {
				console.log(err);
			}
		)// end of cartList.
	},
	
	delItem: function() {
		let no = $(event.target).parent().parent().parent().data('id');
		svc.cartRemove(no, (result)=> {
			if(result.retCode == 'OK') {
				let price = $('#p_price' + no).val(); // 단가
				let qty = $('#p_num' + no).val(); //  삭제 후 현재 수량
				// 합계반영
				basket.cartCount -= qty;
				basket.cartTotal -= (price * qty);
				basket.reCalc();
				// 화면에서 지우기.
				$('div[data-id="' + no + '"]').remove();
			}
			
		}, err => console.log(err));
	},
	
	reCalc: function() {
		//수량, 금액 합계 계산
		//합계 자리에 출력
		$('#sum_p_num span').text(basket.cartCount);
		$('#sum_p_price span').text(basket.cartTotal.numberFormat());
	},
	
	changePNum: function(no) {
		let qty = -1;
		if (event.target.nodeName == "I") {
			if (event.target.className.indexOf("up") != -1) {
				qty = 1;
			}

		} else if (event.target.nodeName == "INPUT") {
			if (event.key == "ArrowUp") {
				qty = 1;
			}
		}
		let price = $('#p_price' + no).val();
		let qtyElem =$('#p_num' + no);
		let sumElem = $('#p_sum' + no);
		let cvo = {no, qty}
		
		svc.cartUpdate(cvo,
		 result =>{
		$(qtyElem).val(parseInt($(qtyElem).val()) + qty); // 수량변경
				$(sumElem).text((price * $(qtyElem).val()).numberFormat() + "원");
				// 전체수량, 금액
				basket.cartCount += qty;
				basket.cartTotal += (price * qty);
				basket.reCalc();
			},
			err => {
				console.log(err);
			}

		)
		
	}
	
	
}

basket.list();