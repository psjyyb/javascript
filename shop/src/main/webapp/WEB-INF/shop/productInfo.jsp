<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<h3>제품 상세보기</h3>
<c:choose>
	<c:when test="${empty pno}">
		<p>조회된결과가 없습니다.</p>
	</c:when>
	<c:otherwise>
		<form name="productInfo">
			<input type="hidden" name="product" value="${pno.productNo}">
		</form>
		<table class="table">
			<tr>
				<th>상품번호</th>
				<td>${pno.productNo}</td>
				<th>상품명</th>
				<td>${pno.productName}</td>
				<th>상품가격</th>
				<td>${pno.productPrice}</td>
			</tr>
			<tr>
				<c:if test="${pno.img!=null}">
					<th>사진</th>
					<td><img src="./images/${pno.img}"></td>
				</c:if>
				<th>상품설명</th>
				<td colspan="5">${pno.productGive }</td>
			</tr>
			<tr>
				<th>등록일:</th>
				<td><fmt:formatDate value="${pno.productDate}"
						pattern="yyyy-MM-dd HH:mm:ss" /></td>
				<th>판매자ID:</th>
				<td colspan="3">${pno.productId}</td>
			</tr>
			<c:choose>
			<c:when test="${pno.productId eq logId }">
				<tr align="center">
					<td colspan="6"><button class="btn btn-primary" id="modBtn">수정</button>
						<button class="btn btn-danger" id="delBtn">삭제</button></td>
				</tr>
			</c:when>
			<c:otherwise>
			<tr align="center">
			<td colspan="6"><button class="btn btn-primary" id="orderBtn">주문</button></td>
			</tr>
			</c:otherwise>
			</c:choose>
		</table>
	</c:otherwise>
</c:choose>
<script>
const pno = "${ pno.productNo }";
</script>
<script src="js/shop.js"></script>
