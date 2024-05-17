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
					$(rowDiv).find('div.basketprice').children().eq(2).text(cart.price.numberFormat() + "원");
					
					$(rowDiv).find('div.basketprice input').val(cart.price);
					$(rowDiv).find('div.basketprice input').attr('id', 'p_price' + cart.no);
					
					$(rowDiv).find('div.updown input').val(cart.qty);
					$(rowDiv).find('div.updown input').attr('id', 'p_num' + cart.no);
					$(rowDiv).find('div.updown input').attr('name', 'p_num' + cart.no);
					
					// event
					$(rowDiv).find('div.updown input').on('keyup', () => {
						basket.changePNum(cart.no);
					})
					$(rowDiv).find('div.updown span').on('click', () => {
						basket.changePnum(cart.no);
					})
					$(rowDiv).find('div.updown span:nth-of-type(2)').on('click', ()=>{
						basket.changePNum(cart.no);
					})
					
					// event
					$(rowDiv).find('div.updown input').on('keyup', () => basket.changePNum(cart.no));
					rowDiv.querySelector('div.updown span').onclick = () => basket.changePNum(cart.no);
					rowDiv.querySelector('div.updown span:nth-of-type(2)').onclick = () => basket.changePNum(cart.no);
					// 개별합계
					rowDiv.querySelector('div.sum').textContent = (cart.qty * cart.price).numberFormat() + "원";
					rowDiv.querySelector('div.sum').setAttribute('id', 'p_sum' + cart.no);
					document.querySelector('#basket').append(rowDiv);
				});
				basket.reCalc();
			},
			err => {
				console.log(err);
			}
		)// end of cartList.
	}
}
basket.list();