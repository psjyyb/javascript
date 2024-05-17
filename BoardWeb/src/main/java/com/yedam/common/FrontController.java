package com.yedam.common;

import java.io.IOException;
import java.util.*;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import com.yedam.web.*;

@WebServlet
public class FrontController extends HttpServlet {

	// 필드
	Map<String, Control> map;

	// 생성자.
	public FrontController() {
		map = new HashMap<>();
	}

	// init.
	@Override
	public void init(ServletConfig config) throws ServletException {
		// url패턴과 실행할 Control(인터페이스) 구현클래스 정의
		map.put("/main.do", new MainControl()); // 첫화면
		map.put("/addForm.do",new AddFormControl()); // 글등록 화면
		map.put("/addBoard.do",new AddBoardControl()); // 글등록 기능
		map.put("/boardInfo.do", new BoardInfoControl()); // 상세보기화면
		// 수정관련
		map.put("/modBoardForm.do", new ModifyFormControl()); // 수정화면
		map.put("/updateBoard.do", new ModifyControl()); // 수정
		// 삭제관련
		map.put("/removeBoardForm.do", new RemoveFormControl());
		map.put("/deleteBoard.do",new RemoveControl());
		// 로그인관련.
		map.put("/logForm.do",new LoginForm());
		map.put("/login.do",new LoginControl());
		map.put("/logout.do", new LogoutControl());
		// 댓글관련
		map.put("/replyList.do", new ReplyListControl());// 댓글보기
		map.put("/removeReply.do", new RemoveReplyControl());// 댓글삭제
		map.put("/addReply.do", new AddReplyControl()); // 댓글작성
		map.put("/getTotalCnt.do", new TotalCountControl()); // 댓글전체갯수
		map.put("/editReply.do", new editReplyControl());
		// 관리자권한.
		map.put("/memberList.do", new MemberListControl());
		// 상품관련
		map.put("/productList.do",new ProductListControl());
		
		// 장바구니 관련
		map.put("/cartList.do",new CartList()); // 목록
		map.put("/editCart.do", new EditCart());
		map.put("/delCart.do", new Delcart());
		
	}

	// service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=utf-8"); //??
		//resp.setCharacterEncoding("utf-8"); // 요청정보 한글처리
		
		
		String uri = req.getRequestURI(); // url 에서 localhost 를 뺀
		String context = req.getContextPath(); // 프로젝트 이름
		System.out.println("uri: "+uri+", context: "+context);
		String path = uri.substring(context.length());
		System.out.println("path: "+path); // 요청한 페이지
	
		Control control = map.get(path);
		control.exec(req,resp);
	}

	// destroy.
	@Override
	public void destroy() {

	}

}
