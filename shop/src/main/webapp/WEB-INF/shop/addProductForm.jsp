<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"></jsp:include>

<form action="addProduct.do" method="post" enctype="multipart/form-data">
	<table class="table">
		<tr>
			<th>상품명</th>
			<td><input type="text" name="name"></td>
		</tr>
		<tr>
			<th>상품가격</th>
			<td><input type="text" name="price"></td>
		</tr>
		<tr>
			<th>상품설명</th>
			<td><textarea cols="30" rows="4" name="give"></textarea></td>
		</tr>
		<tr>
			<th>상품사진</th>
			<td><input type="file" name="myImg" accept="image/*"
				onchange="setImg(event);"></td>
		</tr>
		<tr>
			<td colspan="4"><div id="imgs"></div></td>
		</tr>


		<tr align="center">
			<td colspan="2"><input type="submit"></td>
		</tr>
	</table>
	<input type="hidden" readonly value="${logId}" name="logId">
</form>
<script>
	function setImg(event) {
		var reader = new FileReader();
		console.log(13);
		reader.onload = function(event) {
			var img = document.createElement("img");
			img.setAttribute("src", event.target.result);
			document.querySelector("div#imgs").appendChild(img);
		};
		reader.readAsDataURL(event.target.files[0]);
	}
</script>

<jsp:include page="../includes/footer.jsp"></jsp:include>