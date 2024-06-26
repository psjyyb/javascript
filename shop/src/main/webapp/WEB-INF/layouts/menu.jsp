<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="border-end bg-white" id="sidebar-wrapper">
	<div class="sidebar-heading border-bottom bg-light">Bootstrap(${empty logId ?'Guest' : logId})</div>
	<div class="list-group list-group-flush">
		<c:choose>
			<c:when test="${empty logId }">
			</c:when>
			<c:otherwise>
				<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="addProductForm.do">상품등록</a>
			</c:otherwise>
		</c:choose>
		<a
			class="list-group-item list-group-item-action list-group-item-light p-3"
			href="shopmain.do">상품목록</a>
		<c:choose>
			<c:when test="${empty logId }">
				<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="loginForm.do">로그인</a>
				<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="addMemberForm.do">회원가입</a>
			</c:when>
			<c:otherwise>
				<a
					class="list-group-item list-group-item-action list-group-item-light p-3"
					href="logoutControl.do">로그아웃</a>
			</c:otherwise>
		</c:choose>
		<a
			class="list-group-item list-group-item-action list-group-item-light p-3"
			href="#!">Profile</a> <a
			class="list-group-item list-group-item-action list-group-item-light p-3"
			href="#!">Status</a>
	</div>
</div>