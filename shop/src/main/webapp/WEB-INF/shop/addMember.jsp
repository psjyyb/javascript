<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"></jsp:include>

<form action="addMember.do">
<table>
	<tr>
		<th>사용 하실 아이디</th>
		<td><input type="text" name="id"></td>
	</tr>
	<tr>
		<th>사용 하실 비밀번호</th>
		<td><input type="password" name="pw"></td>
	</tr>
	<tr>
		<th>이름</th>
		<td><input type="text" name="name"></td>
	</tr>
	<tr>
		<th>전화번호</th>
		<td><input type="text" name="phone"></td>
	</tr>
	<tr align="center">
			<td colspan="2"><input type="submit"></td>
		</tr>
</table>
</form>
<jsp:include page="../includes/footer.jsp"></jsp:include>