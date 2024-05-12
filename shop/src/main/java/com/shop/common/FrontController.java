package com.shop.common;

import java.io.IOException;
import java.util.*;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.shop.member.control.AddMember;
import com.shop.member.control.AddMemberForm;
import com.shop.member.control.LoginControl;
import com.shop.member.control.LogoutControl;
import com.shop.member.control.loginForm;
import com.shop.product.control.AddProductControl;
import com.shop.product.control.AddProductFormControl;
import com.shop.product.control.MainControl;
import com.shop.product.control.ProductInfoControl;


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
		// 상품관련.
		map.put("/shopmain.do", new MainControl()); // 메인화면 
		map.put("/addProductForm.do",new AddProductFormControl()); // 상품등록화면
		map.put("/addProduct.do", new AddProductControl()); // 상품 등록기능
		map.put("/productInfo.do",new ProductInfoControl()); // 제품 상세보기
		
		// 회원관련.
		map.put("/addMemberForm.do",new AddMemberForm()); // 회원 가입화면
		map.put("/addMember.do",new AddMember()); // 회원 가입기능
		map.put("/loginForm.do", new loginForm()); // 로그인 화면
		map.put("/loginControl.do", new LoginControl()); // 로그인 기능
		map.put("/logoutControl.do", new LogoutControl());
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
