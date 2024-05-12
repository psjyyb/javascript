package com.shop.member.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.shop.common.Control;
import com.shop.member.VO.MemberVO;
import com.shop.member.service.MemberService;
import com.shop.member.service.MemberServiceImpl;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		MemberService svc = new MemberServiceImpl();
		MemberVO mvo = svc.login(id, pw);
		
		if(mvo!=null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", mvo.getMemberId());
			resp.sendRedirect("shopmain.do");
		}else {
			resp.sendRedirect("loginForm.do");
		}
	}

}
