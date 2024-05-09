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
import com.yedam.web.MainControl;

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
		map.put("/main.do", new MainControl());
		map.put("/addForm.do",new AddFormControl());
		map.put("/addBoard.do",new AddBoardControl());

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
