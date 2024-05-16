/**
 * jtodo.js 
 * jquery 버전의 todo리스트 구현
 */
$(document).ready(function() {
	$('li').each(function() {
		var span = $('<span></span>').addClass('close').text('\u00D7');
		$(this).append(span);
		$(this).on('click',function(){
			$(this).toggleClass('checked');
		})
	})
	$('.close').on('click',function(){
	$(this).parent().css('display','none');
	})
	$('.addBtn').on('click',function(){
		
		let li =$('<li />');
		li.text($('#myInput').val());
		$('#myUL').append(li);
		
	})
})
