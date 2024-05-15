<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<style>
.center {
	text-align: center;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	border: 1px solid #ddd;
	margin: 0 4px;
}

.pagination a.active {
	background-color: #4CAF50;
	color: white;
	border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}
</style>


<h6>성준쇼핑몰 메인 화면 입니다</h6>

<hr />
<form action="addProduct.do">
	<table class="table">
		<tbody>
	<c:forEach var="product" items="${productList}">
		<tr>
			<th>상품번호: </th><td>${product.productNo}</td>
			<th>상품명: </th><td><a href="productInfo.do?product=${product.productNo}"> ${product.productName}</a></td>
			<th>상품가격: </th><td>${product.productPrice}원</td>
		</tr>
	</c:forEach>
	</tbody>
	</table>
</form>

