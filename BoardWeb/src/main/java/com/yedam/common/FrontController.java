package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.web.AddBoardControl;
import com.yedam.web.AddFormControl;
import com.yedam.web.BoardInfoControl;
import com.yedam.web.MainControl;
import com.yedam.web.ModifyControl;
import com.yedam.web.ModifyFormControl;
import com.yedam.web.RemoveControl;
import com.yedam.web.RemoveFormControl;

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
		map.put("/addForm.do",new AddFormControl()); // 추가 화면
		map.put("/addBoard.do",new AddBoardControl()); // 추가
		map.put("/boardInfo.do", new BoardInfoControl()); // 상세보기화면
		// 수정관련
		map.put("/modBoardForm.do", new ModifyFormControl()); // 수정화면
		map.put("/updateBoard.do", new ModifyControl()); // 수정
		// 삭제관련
		map.put("/removeBoardForm.do", new RemoveFormControl());
		map.put("/deleteBoard.do",new RemoveControl());
	}

	// service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8"); //??
		resp.setCharacterEncoding("utf-8"); // 요청정보 한글처리
		
		
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
