/**
 * jtodo.js 
 * jquery 버전의 todo리스트 구현
 */
$(document).ready(function() {
	$('li').each(function() {
		let span = $('<span></span>').addClass('close').text('\u00D7');
		$(this).append(span);
		$(this).on('click', function() {
			$(this).toggleClass('checked');
		})
	})
	$('.addBtn').on('click', function() {
		let li = $('<li />');
		let span = $('<span></span>').addClass('close').text('\u00D7');
		span.on('click', function() {
		$(this).parent().css('display', 'none');
		})
		if(($('#myInput').val())!=""){
		li.text($('#myInput').val());
		li.append(span);
		$('#myUL').append(li);
		li.on('click', function() {
			li.toggleClass('checked');
		})
		}else{
			alert("내용을 입력하세요.");
		}
	})
    	$('.close').on('click', function() {
		$(this).parent().css('display', 'none');
		})
		
	
})
