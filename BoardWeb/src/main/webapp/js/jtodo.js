/**
 * jtodo.js 
 * jquery 버전의 todo리스트 구현
 */
$(document).ready(function() {
	$('li').each(function() {
		var span = $('<span></span>').addClass('close').text('\u00D7');
		$(this).append(span);
	})
	$('.close').on('click',function(){
		console.log(this.parent());
	})
})
